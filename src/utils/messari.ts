import { AssetSymbol } from "types/asset";
import { AssetTimeseriesResponse, GroupedSeries } from "types/messari";

type GroupByDateWithPrice = Record<
  string,
  { price: number; symbol: AssetSymbol }
>;

export const groupTimeseries = (
  timeSeries: AssetTimeseriesResponse[]
): GroupedSeries =>
  timeSeries
    .map((series) =>
      series.data.values.reduce<GroupByDateWithPrice>(
        (acc, [date, price]) => ({
          ...acc,
          [date]: { price, symbol: series.data.symbol },
        }),
        {}
      )
    )
    .reduce<GroupedSeries>((acc, groupedWithPrice) => {
      const dates = Object.keys(groupedWithPrice);

      return dates.reduce<GroupedSeries>(
        (innerAcc, date) => ({
          ...innerAcc,
          [date]: {
            ...innerAcc[date],
            [groupedWithPrice[date].symbol]: groupedWithPrice[date].price,
          },
        }),
        acc
      );
    }, {});
