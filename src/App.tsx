import React from "react";
import { ThemeProvider } from "@mui/material";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import { theme } from "constants/theme";
import { PAGE_SLUG } from "constants/app";
import { Dashboard } from "components/Dashboard";
import { PortfolioRoute } from "components/PortfolioRoute";
import { PortfolioManager } from "services/PortfolioManager";
import { Upload, Portfolio, Assets } from "pages";

export const App: React.FC = () => (
  <BrowserRouter basename="/portapp">
    <ThemeProvider theme={theme}>
      <PortfolioManager>
        <Dashboard>
          <Switch>
            <Route exact path={`/${PAGE_SLUG.upload}`}>
              <Upload />
            </Route>
            <PortfolioRoute exact path={`/${PAGE_SLUG.portfolio}`}>
              <Portfolio />
            </PortfolioRoute>
            <PortfolioRoute exact path={`/${PAGE_SLUG.assets}`}>
              <Assets />
            </PortfolioRoute>
            <Redirect to={`/${PAGE_SLUG.portfolio}`} />
          </Switch>
        </Dashboard>
      </PortfolioManager>
    </ThemeProvider>
  </BrowserRouter>
);
