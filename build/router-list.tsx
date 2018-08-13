import React from 'react';
import dva from 'dva';
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import routerConfig from './router-config.ts';
import application from 'src/Application.ts';
import Network from 'kirin-strap/network';

// 获取配置
(Network.prototype as any).networkOptions = process.env.XRenderOption.network || {};
(Network.prototype as any).onNetworkRequestAppBefore = (application as any).onNetworkRequestBefore;
(Network.prototype as any).onNetworkResponseAppAfter = (application as any).onNetworkResponseAfter;
(Network.prototype as any).onNetworkAppError = (application as any).onNetworkError;


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
