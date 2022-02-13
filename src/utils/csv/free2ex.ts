import {
  GroupedPortfolio,
  GroupedPortfolioOperation,
  PortfolioOperation,
} from "types/portfolio";
import { Free2exAssetOperation } from "types/free2ex";
import { AssetSymbol } from "types/asset";

import { resetDateToStart } from "../date";
import { parseGroupedPortfolioOperations } from "./common";

const parseSymbolToGeneric = (asset: string): AssetSymbol =>
  (asset === "MAT" ? "MATIC" : asset) as AssetSymbol;

const parsePairSymbol = (symbol: string): [AssetSymbol, AssetSymbol] =>
  symbol
    .split("/")
    .map((asset) => asset.trim())
    .map(parseSymbolToGeneric) as [AssetSymbol, AssetSymbol];

export const appendAssetOperations = (
  operations: PortfolioOperation[],
  free2exOperation: Free2exAssetOperation
): PortfolioOperation[] => {
  if (free2exOperation[2] === "BUY Market") {
    const [asset1, asset2] = parsePairSymbol(free2exOperation[5]);

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
    const [asset1, asset2] = parsePairSymbol(free2exOperation[5]);

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

  if (["Deposit", "Withdrawal"].includes(free2exOperation[2])) {
    operations.push({
      symbol: parseSymbolToGeneric(free2exOperation[5]),
      volume: parseFloat(free2exOperation[19]),
      investment: parseFloat(free2exOperation[19]),
    });
  }

  return operations;
};

export const parseFree2exPortfolio = (
  rawOperations: Free2exAssetOperation[]
): GroupedPortfolio =>
  parseGroupedPortfolioOperations(
    rawOperations.reduce<GroupedPortfolioOperation>((acc, free2exOperation) => {
      const operationDate = resetDateToStart(+new Date(free2exOperation[1]));
      const operations: PortfolioOperation[] = acc[operationDate] || [];
      const updatedOperations = appendAssetOperations(
        operations.slice(),
        free2exOperation
      );

      return { ...acc, [operationDate]: updatedOperations };
    }, {})
  );
