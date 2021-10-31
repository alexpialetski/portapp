import {
  GroupedSeries,
  AssetSymbol,
  GroupedPortfolio,
  PortfolioAssetDayPrice,
  AssetRecordWithTotal,
} from "types";
import { findClosestAndLessDate } from "utils";

export const getUniqueAssets = (portfolio: GroupedPortfolio): AssetSymbol[] =>
  Object.keys(portfolio).reduce<AssetSymbol[]>((acc, date) => {
    if (acc.length < Object.keys(portfolio[date]).length) {
      return Object.keys(portfolio[date]) as AssetSymbol[];
    }

    return acc;
  }, []);

export const combinePortfolioAndSeries = (
  portfolio: GroupedPortfolio,
  series: GroupedSeries
): PortfolioAssetDayPrice => {
  const portfolioDates = Object.keys(portfolio).map(Number);

  return Object.keys(series).reduce<PortfolioAssetDayPrice>((acc, date) => {
    const portfolioDate = findClosestAndLessDate(Number(date), portfolioDates);
    const portfolioDateVolume = portfolio[portfolioDate] || {};
    const seriesDateVolume = series[date] || {};

    const portfolioBySeries = (
      Object.keys(seriesDateVolume) as AssetSymbol[]
    ).reduce<AssetRecordWithTotal>(
      (innerAcc, symbol) => {
        const assetPriceByDate = seriesDateVolume[symbol] || 0;
        const portfolioVolume = portfolioDateVolume[symbol] || 0;
        const assetPrice = portfolioVolume * assetPriceByDate;

        return {
          ...innerAcc,
          [symbol]: portfolioVolume * assetPriceByDate,
          TOTAL: innerAcc.TOTAL + assetPrice,
        };
      },
      { TOTAL: 0 }
    );

    return {
      ...acc,
      [date]: portfolioBySeries,
    };
  }, {});
};
