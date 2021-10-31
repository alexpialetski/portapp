import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { usePortfolioManager } from "services/PortfolioManager";
import { PAGE_SLUG } from "constants/app";

export const PortfolioRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { portfolio } = usePortfolioManager();

  if (!portfolio) {
    return <Redirect to={`/${PAGE_SLUG.upload}`} />;
  }

  return <Route {...rest}>{children}</Route>;
};
