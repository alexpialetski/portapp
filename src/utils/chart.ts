import {
  Series,
  DailyAssetPrice,
  PortfolioAssetDayPrice,
  PortfolioAssetSymbol,
} from "types";

export const getChartByAsset = (
  asset: PortfolioAssetSymbol,
  portfolioAssetDayPrice: PortfolioAssetDayPrice
): Series => {
  const data = Object.keys(portfolioAssetDayPrice).map<DailyAssetPrice>(
    (date) => ({
      date: new Date(Number(date)),
      price: portfolioAssetDayPrice[date][asset] || 0,
    })
  );

  return {
    label: asset,
    data,
  };
};
