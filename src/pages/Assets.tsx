import React from "react";
import { Grid, Typography } from "@mui/material";

import { usePortfolioManager } from "services/PortfolioManager";
import { Loader } from "components/Loader";
import { ChartByAsset } from "components/ChartByAsset";
import {
  getChartByAsset,
  formatSeriesFloat,
  getDaysBefore,
  resetDateToStart,
  getDifferenceInPercents,
} from "utils";

export const Assets: React.FC = () => {
  const { portfolioAssetDayPrice, uniqueAssets } = usePortfolioManager();
  const yesterday = getDaysBefore(resetDateToStart(Date.now()), 1);

  if (!portfolioAssetDayPrice || !uniqueAssets) {
    return <Loader />;
  }

  return (
    <Grid container height="100%">
      {uniqueAssets.map((asset) => (
        <Grid key={asset} item md={6} xs={12} mb={5} height={300}>
          <Typography component="span" variant="h5">
            {asset}
          </Typography>{" "}
          <Typography component="span" variant="h6">
            {formatSeriesFloat(
              getDifferenceInPercents(portfolioAssetDayPrice, yesterday, asset)
            ) + "%"}
          </Typography>
          <ChartByAsset
            series={[
              getChartByAsset(asset, portfolioAssetDayPrice, "price"),
              getChartByAsset(
                asset,
                portfolioAssetDayPrice,
                "investment",
                "Fund",
                false
              ),
            ]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
