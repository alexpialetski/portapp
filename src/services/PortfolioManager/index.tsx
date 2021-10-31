import React, { useEffect, useState } from "react";

import { AssetSymbol, GroupedPortfolio, PortfolioAssetDayPrice } from "types";
import {
  getUniqueAssets,
  groupTimeseries,
  combinePortfolioAndSeries,
} from "utils";
import { getAssetsForPeriod } from "services/messari";

import { PortfolioManagerContext } from "./context";

class LCPortfolio {
  static #PORTFOLIO_LC_KEY = "PORTFOLIO_LC_KEY";

  static getFromStorage(): GroupedPortfolio | undefined {
    const lcText = localStorage.getItem(this.#PORTFOLIO_LC_KEY);

    if (!lcText) return undefined;

    try {
      return JSON.parse(lcText);
    } catch {
      return undefined;
    }
  }

  static put(portfolio: GroupedPortfolio): void {
    localStorage.setItem(this.#PORTFOLIO_LC_KEY, JSON.stringify(portfolio));
  }
}

export const PortfolioManager: React.FC = ({ children }) => {
  const [portfolio, setPortfolio] = useState<GroupedPortfolio | undefined>(
    LCPortfolio.getFromStorage()
  );
  const [portfolioAssetDayPrice, setPortfolioAssetDayPrice] =
    useState<PortfolioAssetDayPrice>();
  const [uniqueAssets, setUniqueAssets] = useState<AssetSymbol[]>();

  useEffect(() => portfolio && LCPortfolio.put(portfolio), [portfolio]);

  useEffect(() => {
    if (portfolio) {
      const assets = getUniqueAssets(portfolio);
      const startDate = Object.keys(portfolio)[0];

      setUniqueAssets(assets);

      getAssetsForPeriod(assets, {
        start: startDate,
        columns: "close",
        interval: "1d",
      })
        .then(groupTimeseries)
        .then((assetSeries) =>
          combinePortfolioAndSeries(portfolio, assetSeries)
        )
        .then(setPortfolioAssetDayPrice);
    }
  }, [portfolio]);

  return (
    <PortfolioManagerContext.Provider
      value={{
        portfolio,
        portfolioAssetDayPrice,
        uniqueAssets,
        setPortfolio,
      }}
    >
      {children}
    </PortfolioManagerContext.Provider>
  );
};

export { usePortfolioManager } from "./usePortfolio";
