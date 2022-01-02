import {
  GroupedPortfolio,
  GroupedPortfolioOperation,
  PortfolioOperation,
} from "types/portfolio";
import { Free2exCSV, Free2exAssetOperation } from "types/free2ex";
import { AssetSymbol } from "types/asset";

import { isFree2exAssetOperation } from "../free2ex";
import { resetDateToStart } from "../date";
import { parseGroupedPortfolioOperations } from "./common";

export const appendAssetOperations = (
  operations: PortfolioOperation[],
  free2exOperation: Free2exAssetOperation
): PortfolioOperation[] => {
  if (free2exOperation[2] === "BUY Market") {
    const [asset1, asset2] = free2exOperation[5]
      .split("/")
      .map((asset) => asset.trim()) as [AssetSymbol, AssetSymbol];

    operations.push({
      symbol: asset1,
      volume: parseFloat(free2exOperation[19]),
      investment: asset2 === "USD" ? parseFloat(free2exOperation[20]) * -1 : 0,
    });
    operations.push({
      symbol: asset2,
      volume: parseFloat(free2exOperation[20]),
      investment: 0,
    });
  }

  if (free2exOperation[2] === "SELL Market") {
    const [asset1, asset2] = free2exOperation[5]
      .split("/")
      .map((asset) => asset.trim()) as [AssetSymbol, AssetSymbol];

    operations.push({
      symbol: asset1,
      volume: parseFloat(free2exOperation[19]),
      investment: asset2 === "USD" ? parseFloat(free2exOperation[20]) : 0,
    });
    operations.push({
      symbol: asset2,
      volume: parseFloat(free2exOperation[20]),
      investment: 0,
    });
  }

  if (free2exOperation[2] === "Deposit") {
    operations.push({
      symbol: free2exOperation[5] as AssetSymbol,
      volume: parseFloat(free2exOperation[19]),
      investment: parseFloat(free2exOperation[19]),
    });
  }

  return operations;
};

export const parseFree2exPortfolio = (csv: Free2exCSV): GroupedPortfolio =>
  parseGroupedPortfolioOperations(
    csv
      .filter(isFree2exAssetOperation)
      .reduce<GroupedPortfolioOperation>((acc, free2exOperation) => {
        const operationDate = resetDateToStart(+new Date(free2exOperation[1]));
        const operations: PortfolioOperation[] = acc[operationDate] || [];
        const updatedOperations = appendAssetOperations(
          operations.slice(),
          free2exOperation
        );

        return { ...acc, [operationDate]: updatedOperations };
      }, {})
  );
