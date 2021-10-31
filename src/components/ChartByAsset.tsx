import React, { useMemo } from "react";
import { Chart, AxisOptions } from "react-charts";

import { DailyAssetPrice, Series } from "types/chart";
import { getChartByAsset } from "utils/chart";
import { PortfolioAssetDayPrice, PortfolioAssetSymbol } from "types";

export type ChartByAssetProps = {
  asset: PortfolioAssetSymbol;
  portfolioAssetDayPrice: PortfolioAssetDayPrice;
};

export const ChartByAsset: React.FC<ChartByAssetProps> = ({
  portfolioAssetDayPrice,
  asset,
}) => {
  const chartSeries = useMemo<Series>(
    () => getChartByAsset(asset, portfolioAssetDayPrice),
    [portfolioAssetDayPrice, asset]
  );

  const primaryAxis = useMemo(
    (): AxisOptions<DailyAssetPrice> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DailyAssetPrice>[] => [
      {
        getValue: (datum) => datum.price,
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data: [chartSeries],
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
};
