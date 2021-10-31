import { AssetSymbol, GroupedPortfolio, PortfolioAssetDayPrice } from "types";

export type PortfolioManagerState = {
  portfolio?: GroupedPortfolio;
  portfolioAssetDayPrice?: PortfolioAssetDayPrice;
  uniqueAssets?: AssetSymbol[];
  setPortfolio: (portfolio: GroupedPortfolio) => void;
};
