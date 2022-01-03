import React from "react";
import Typography from "@mui/material/Typography";

import { usePortfolioManager } from "services/PortfolioManager";
import {
  resetDateToStart,
  getDaysBefore,
  formatSeriesFloat,
  getDifferenceInPercents,
} from "utils";

export const BarPortfolioStat: React.FC = () => {
  const { portfolioAssetDayPrice } = usePortfolioManager();
  const yesterday = getDaysBefore(resetDateToStart(Date.now()), 1);

  if (!portfolioAssetDayPrice) {
    return null;
  }

  const totalInfo = portfolioAssetDayPrice[yesterday].TOTAL;

  return (
    <Typography component="h1" variant="body1" color="inherit" noWrap>
      {`${formatSeriesFloat(totalInfo.price)}$ & ${formatSeriesFloat(
        getDifferenceInPercents(portfolioAssetDayPrice, yesterday, "TOTAL")
      )}%`}
      {}
    </Typography>
  );
};
