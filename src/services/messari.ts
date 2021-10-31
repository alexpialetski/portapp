import {
  AssetTimeseriesQueryParams,
  AssetTimeseriesResponse,
  AssetSymbol,
} from "types";
import { getDaysBefore, getTimestampsFromStart, resetDateToStart } from "utils";

export const getAssetTimeseries = (
  asset: AssetSymbol,
  queryParams: AssetTimeseriesQueryParams
): Promise<AssetTimeseriesResponse> =>
  fetch(
    `https://data.messari.io/api/v1/assets/${asset}/metrics/price/time-series?${new URLSearchParams(
      queryParams
    ).toString()}`
  ).then((res) => res.json());

export const getUSDTimeseries = (
  start?: string
): Promise<AssetTimeseriesResponse> =>
  Promise.resolve<AssetTimeseriesResponse>({
    status: { elapsed: 0, timestamp: "0" },
    data: {
      id: "usd_id",
      name: "USD",
      slug: "usd",
      symbol: "USD",
      values: getTimestampsFromStart(
        Number(start),
        getDaysBefore(resetDateToStart(new Date().getTime()), 1)
      ).map((date) => [date, 1]),
    },
  });

export const getAssetsForPeriod = (
  assets: AssetSymbol[],
  queryParams: AssetTimeseriesQueryParams
): Promise<AssetTimeseriesResponse[]> =>
  Promise.all(
    assets.map((asset) => {
      if (asset === "USD") {
        return getUSDTimeseries(queryParams.start);
      }

      return getAssetTimeseries(asset, queryParams);
    })
  );
