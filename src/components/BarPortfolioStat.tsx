import React from "react";
import Typography from "@mui/material/Typography";

import { usePortfolioManager } from "services/PortfolioManager";
import { resetDateToStart, getDaysBefore } from "utils/date";
import { formatSeriesFloat } from "utils/chart";

export const BarPortfolioStat: React.FC = () => {
  const { portfolioAssetDayPrice } = usePortfolioManager();

  if (!portfolioAssetDayPrice) {
    return null;
  }

  const totalInfo =
    portfolioAssetDayPrice[getDaysBefore(resetDateToStart(Date.now()), 1)]
      .TOTAL;

  return (
    <Typography component="h1" variant="body1" color="inherit" noWrap>
      {`${formatSeriesFloat(totalInfo.price)}$ & ${formatSeriesFloat(
        ((totalInfo.price - totalInfo.investment) / totalInfo.investment) * 100
      )}%`}
      {}
    </Typography>
  );
};
