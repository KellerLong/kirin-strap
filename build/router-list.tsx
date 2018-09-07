import React from 'react';
import Router from 'kirin-strap/route';
import routerConfig from './router-config.ts';
import application from 'src/Application.ts';
import Network from 'kirin-strap/network';

// 获取配置
(Network.prototype as any).networkOptions = process.env.kirinStrapOption.network || {};
(Network.prototype as any).onNetworkRequestAppBefore = (application as any).onNetworkRequestBefore;
(Network.prototype as any).onNetworkResponseAppAfter = (application as any).onNetworkResponseAfter;
(Network.prototype as any).onNetworkAppError = (application as any).onNetworkError;


const { ConnectedRouter } = Router.routerRedux;

const router = ({ history, app }) => (
    <ConnectedRouter history={history}>
        <Router.Switch>
            { routerConfig.map(({ component, path, models }, key) => {
                return (
                    <Router.RouteView
                        key={key}
                        exact={true}
                        path={path}
                        component={Router.dynamic({ app, component, models: () => models })}
                    />
                );
            }) }

        </Router.Switch>
    </ConnectedRouter>
);

(application as any).__start__(router);
