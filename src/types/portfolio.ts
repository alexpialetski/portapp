import { AssetSymbol } from "./asset";

export type PortfolioOperation = {
  symbol: AssetSymbol;
  volume: number;
};

export type GroupedPortfolioOperation = Record<string, PortfolioOperation[]>;

export type AssetRecord = Partial<Record<AssetSymbol, number>>;

export type PortfolioAssetSymbol = AssetSymbol | "TOTAL";

export type AssetRecordWithTotal = Partial<Record<AssetSymbol, number>> & {
  TOTAL: number;
};

export type GroupedPortfolio = Record<string, AssetRecord>;

export type PortfolioAssetDayPrice = Record<string, AssetRecordWithTotal>;
