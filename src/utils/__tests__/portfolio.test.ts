import { AssetSymbol } from "types/asset";

import { getUniqueAssets } from "../portfolio";

describe("portfolio", () => {
  test("getUniqueAssets", () => {
    expect(
      getUniqueAssets({
        "1": {
          BTC: { volume: 1, investment: 0 },
          ETH: { volume: 1, investment: 0 },
          MATIC: { volume: 3, investment: 0 },
        },
        "2": {
          BTC: { volume: 2, investment: 0 },
          ETH: { volume: 2, investment: 0 },
          MATIC: { volume: 3, investment: 0 },
          USD: { volume: 4, investment: 0 },
        },
      })
    ).toStrictEqual<AssetSymbol[]>(["BTC", "ETH", "MATIC", "USD"]);
  });
});
