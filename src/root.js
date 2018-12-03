import React from "react";
import { Provider } from "react-redux"; //Makes redux state available to all container components
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import FeatureOneContainer from "featureOne/featureOneContainer";

const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <FeatureOneContainer />
        </ConnectedRouter>
    </Provider>
);

export default Root;
