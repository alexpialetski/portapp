import React from "react";
import { Grid, Typography } from "@mui/material";

import { usePortfolioManager } from "services/PortfolioManager";
import { Loader } from "components/Loader";
import { ChartByAsset } from "components/ChartByAsset";
import { getChartByAsset } from "utils";

export const Assets: React.FC = () => {
  const { portfolioAssetDayPrice, uniqueAssets } = usePortfolioManager();

  if (!portfolioAssetDayPrice || !uniqueAssets) {
    return <Loader />;
  }

  return (
    <Grid container height="100%">
      {uniqueAssets.map((asset) => (
        <Grid key={asset} item md={6} xs={12} mb={5} height={300}>
          <Typography variant="h5">{asset}</Typography>
          <ChartByAsset
            series={[
              getChartByAsset(asset, portfolioAssetDayPrice, "price"),
              getChartByAsset(
                asset,
                portfolioAssetDayPrice,
                "investment",
                "Investments",
                false
              ),
            ]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
