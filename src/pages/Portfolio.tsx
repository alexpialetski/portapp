import React from "react";

import { usePortfolioManager } from "services/PortfolioManager";
import { Loader } from "components/Loader";
import { ChartByAsset } from "components/ChartByAsset";

export const Portfolio: React.FC = () => {
  const { portfolioAssetDayPrice } = usePortfolioManager();

  if (!portfolioAssetDayPrice) {
    return <Loader />;
  }

  return (
    <ChartByAsset
      asset="TOTAL"
      portfolioAssetDayPrice={portfolioAssetDayPrice}
    />
  );
};
