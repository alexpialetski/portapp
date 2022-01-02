import React, { useMemo } from "react";

import { usePortfolioManager } from "services/PortfolioManager";
import { Loader } from "components/Loader";
import { ChartByAsset } from "components/ChartByAsset";
import { Series } from "types";
import { getChartByAsset } from "utils";

export const Portfolio: React.FC = () => {
  const { portfolioAssetDayPrice } = usePortfolioManager();

  const chartSeries = useMemo<Series[] | undefined>(
    () =>
      portfolioAssetDayPrice && [
        getChartByAsset("TOTAL", portfolioAssetDayPrice, "price"),
        getChartByAsset(
          "TOTAL",
          portfolioAssetDayPrice,
          "investment",
          "Fund",
          false
        ),
      ],
    [portfolioAssetDayPrice]
  );

  if (!chartSeries) {
    return <Loader />;
  }

  return <ChartByAsset series={chartSeries} />;
};
