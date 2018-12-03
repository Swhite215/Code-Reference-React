import React from "react";
import ReactDOM from "react-dom";
import Root from "root";
import history from "./history/history";
import configureStore from "redux/store/configureStore";

const store = configureStore(history);

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById("root")
);
