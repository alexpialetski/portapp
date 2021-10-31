import { AssetSymbol } from "types/asset";

import { getUniqueAssets } from "../portfolio";

describe("portfolio", () => {
  test("getUniqueAssets", () => {
    expect(
      getUniqueAssets({
        "1": { BTC: 1, ETH: 1, MATIC: 3 },
        "2": { BTC: 2, ETH: 2, MATIC: 3, USD: 4 },
      })
    ).toStrictEqual<AssetSymbol[]>(["BTC", "ETH", "MATIC", "USD"]);
  });
});
