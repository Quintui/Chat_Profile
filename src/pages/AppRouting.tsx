import React from "react";
import { Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouting = () => {
  const user = false;

  return user ? (
    <Switch>
      {privateRoutes.map(({ Component, path, id }) => (
        <Route key={id} path={path} render={() => <Component />} />
      ))}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ Component, path, id }) => (
        <Route key={id} path={path} render={() => <Component />} />
      ))}
    </Switch>
  );
};

export default AppRouting;
