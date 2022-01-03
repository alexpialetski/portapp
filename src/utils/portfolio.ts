import {
  GroupedSeries,
  AssetSymbol,
  GroupedPortfolio,
  PortfolioAssetDayPrice,
  AssetRecordWithTotal,
  PortfolioAssetSymbol,
} from "types";
import { findClosestAndLessDate } from "utils/date";

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
        const portfolioAssetInfo = portfolioDateVolume[symbol] || {
          volume: 0,
          investment: 0,
        };
        const assetPrice = portfolioAssetInfo.volume * assetPriceByDate;
        const usdInvestments = portfolioDateVolume.USD?.investment || 0;
        const totalPrice = innerAcc.TOTAL.price + assetPrice;

        return {
          ...innerAcc,
          [symbol]: {
            volume: portfolioAssetInfo.volume,
            price: assetPrice,
            investment: portfolioAssetInfo.investment,
          },
          TOTAL: {
            volume: 0,
            price: totalPrice,
            investment: usdInvestments,
          },
        };
      },
      { TOTAL: { volume: 0, price: 0, investment: 0 } }
    );

    return {
      ...acc,
      [date]: portfolioBySeries,
    };
  }, {});
};

export const getDifferenceInPercents = (
  portfolioAssetDayPrice: PortfolioAssetDayPrice,
  date: number,
  asset: PortfolioAssetSymbol
): number => {
  const info = portfolioAssetDayPrice[date][asset];

  return info ? ((info.price - info.investment) / info.investment) * 100 : 0;
};
