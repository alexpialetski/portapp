import {
  Series,
  DailyAssetPrice,
  PortfolioAssetDayPrice,
  PortfolioAssetSymbol,
  AssetRecordMeta,
} from "types";

export const getChartByAsset = (
  asset: PortfolioAssetSymbol,
  portfolioAssetDayPrice: PortfolioAssetDayPrice,
  key: keyof AssetRecordMeta = "price",
  label: string = asset,
  haveVolume = true
): Series => {
  const data = Object.keys(portfolioAssetDayPrice).map<DailyAssetPrice>(
    (date) => {
      const assetInfo = portfolioAssetDayPrice[date][asset];

      return {
        date: Number(date),
        price: (assetInfo && assetInfo[key]) || 0,
        volume: (haveVolume && assetInfo?.volume) || 0,
      };
    }
  );

  return {
    label,
    data,
  };
};

export const formatSeriesDate = (date: number | string | Date): string =>
  new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const formatSeriesNumber = (num: number): string =>
  Number(num.toFixed()).toString();

export const formatSeriesFloat = (num: number): string =>
  Number(num.toFixed(3)).toString();
