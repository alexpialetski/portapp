import {
  AssetRecord,
  GroupedPortfolio,
  GroupedPortfolioOperation,
} from "types/portfolio";

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
        const prevAssetInfo = acc[assetOperation.symbol];
        if (prevAssetInfo) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          acc[assetOperation.symbol]! = {
            ...prevAssetInfo,
            investment: prevAssetInfo.investment + assetOperation.investment,
            volume: prevAssetInfo.volume + assetOperation.volume,
          };
        } else {
          acc[assetOperation.symbol] = {
            volume: assetOperation.volume,
            investment: assetOperation.investment,
          };
        }

        return acc;
      },
      lastAssetRecord
    );
  }

  return groupedPortfolio;
};
