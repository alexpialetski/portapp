import { useContext } from "react";

import { PortfolioManagerContext } from "./context";
import { PortfolioManagerState } from "./types";

export const usePortfolioManager = (): PortfolioManagerState =>
  useContext(PortfolioManagerContext);
