import React from 'react';
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router';
const { ConnectedRouter } = routerRedux;
import dynamic from 'dva/dynamic';

export default ({ history, app }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact={true}
        path={path}
        component={dynamic({ app, component, models: []})}
      />
    </Switch>
  </ConnectedRouter>
);