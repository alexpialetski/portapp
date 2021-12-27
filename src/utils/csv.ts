import {
  AssetRecord,
  GroupedPortfolio,
  GroupedPortfolioOperation,
} from "types/portfolio";
import { Free2exCSV, Free2exType } from "types/free2ex";
import { AssetSymbol } from "types/asset";

import { isFree2exAssetOperation } from "./free2ex";
import { resetDateToStart } from "./date";

export const parseGroupedPortfolioOperations = (
  operations: GroupedPortfolioOperation
): GroupedPortfolio => {
  const dates = Object.keys(operations).sort((a, b) => Number(a) - Number(b));
  const groupedPortfolio: GroupedPortfolio = {};
  let lastAssetRecord: AssetRecord;

  for (let i = 0; i < dates.length; i++) {
    lastAssetRecord = { ...(groupedPortfolio[dates[i - 1]] || {}) };

    groupedPortfolio[dates[i]] = operations[dates[i]].reduce<AssetRecord>(
      (acc, assetOperation) => {
        if (acc[assetOperation.symbol]) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          acc[assetOperation.symbol]! += assetOperation.volume;
        } else {
          acc[assetOperation.symbol] = assetOperation.volume;
        }

        return acc;
      },
      lastAssetRecord
    );
  }

  return groupedPortfolio;
};

export const parseFree2exPortfolio = (csv: Free2exCSV): GroupedPortfolio =>
  parseGroupedPortfolioOperations(
    csv
      .filter(isFree2exAssetOperation)
      .reduce<GroupedPortfolioOperation>((acc, free2exOperation) => {
        const operationDate = resetDateToStart(+new Date(free2exOperation[1]));
        const operations = acc[operationDate] || [];

        if (
          (["BUY Market", "SELL Market"] as Free2exType[]).includes(
            free2exOperation[2]
          )
        ) {
          const [asset1, asset2] = free2exOperation[5]
            .split("/")
            .map((asset) => asset.trim()) as [AssetSymbol, AssetSymbol];

          operations.push({
            symbol: asset1,
            volume: parseFloat(free2exOperation[19]),
          });
          operations.push({
            symbol: asset2,
            volume: parseFloat(free2exOperation[20]),
          });
        } else {
          operations.push({
            symbol: free2exOperation[5] as AssetSymbol,
            volume: parseFloat(free2exOperation[19]),
          });
        }

        return { ...acc, [operationDate]: operations };
      }, {})
  );
