import { createContext } from "react";

import { PortfolioManagerState } from "./types";

export const PortfolioManagerContext = createContext<PortfolioManagerState>({
  setPortfolio: () => {},
});
