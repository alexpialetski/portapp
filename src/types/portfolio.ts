import { AssetSymbol } from "./asset";

export type PortfolioOperation = {
  symbol: AssetSymbol;
  volume: number;
  investment: number;
};

export type GroupedPortfolioOperation = Record<string, PortfolioOperation[]>;

export type AssetRecord = Partial<
  Record<AssetSymbol, { investment: number; volume: number }>
>;

export type PortfolioAssetSymbol = AssetSymbol | "TOTAL";

export type AssetRecordMeta = {
  volume: number;
  price: number;
  investment: number;
};

export type AssetRecordWithTotal = Partial<
  Record<AssetSymbol, AssetRecordMeta>
> & {
  TOTAL: AssetRecordMeta;
};

export type GroupedPortfolio = Record<string, AssetRecord>;

export type PortfolioAssetDayPrice = Record<string, AssetRecordWithTotal>;
