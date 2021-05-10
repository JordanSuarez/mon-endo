import React from "react";

import { Redirect, Route, useLocation } from "react-router-dom";

import { getLoginRoute } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import { isAuthenticated } from "./authProvider";

const PrivateRoute = ({
  component,
  path,
  exact,
  id,
}: RouteModel): JSX.Element => {
  const location = useLocation();
  console.log(isAuthenticated());
  return isAuthenticated() ? (
    <Route key={id} exact={exact} path={path} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: getLoginRoute(),
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
