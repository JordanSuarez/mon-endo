import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { arrayOf, bool, shape, string } from "prop-types";
import { RoutesModel } from "common/types/router";
import PrivateRoute from "common/authentication/PrivateRoute";
import NotFound from "pages/NotFound";

const Router = ({ routes }: RoutesModel): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(
          ({ exact = true, path, component, id, requireAuthentication }) => {
            return requireAuthentication ? (
              <PrivateRoute
                key={id}
                path={path}
                id={id}
                exact={exact}
                component={component}
              />
            ) : (
              <Route key={id} exact={exact} path={path} component={component} />
            );
          }
        )}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  routes: arrayOf(
    shape({
      id: string.isRequired,
      path: string.isRequired,
      exact: bool,
    })
  ),
};

Router.defaultProps = {
  routes: [],
};

export default Router;
