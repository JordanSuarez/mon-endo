import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import { arrayOf, bool, shape, string } from "prop-types";
import { RoutesModel } from "common/types/router";

const Router = ({ routes }: RoutesModel): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ exact = true, path, component, id }) => (
          <Route key={id} exact={exact} path={path} component={component} />
        ))}
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  routes: arrayOf(
    shape({
      id: string.isRequired,
      path: string.isRequired,
      exact: bool.isRequired,
    })
  ),
};

Router.defaultProps = {
  routes: [],
};

export default Router;
