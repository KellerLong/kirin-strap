import React from 'react';
import dva from 'dva';
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import routerConfig from './router-config.ts';
import application from 'Application.ts';
import Network from 'x-render/network';

Network.prototype.onNetworkRequestAppBefore = application.onNetworkRequestBefore;

const { ConnectedRouter } = routerRedux;

const router = ({ history, app }) => (
  <ConnectedRouter history={history}>
    <Switch>
      { routerConfig.map(({ component, path, models }, key) => {
        return (
          <Route
            key={key}
            exact={true}
            path={path}
            component={dynamic({ app, component, models: () => models })}
          />
        );
      }) }

    </Switch>
  </ConnectedRouter>
);

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(global);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
