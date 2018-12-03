/*
 *  This handles the initial creation of the store, it uses the function
 *  createStore, which is included in the redux library to generate
 *  the store from the applications reducers, which are defined in the
 *  reducers folder.
 *
 *  The rootReducer is the entry point for all of the other reducers, which
 *  are essentially functions that describe how the application behaves
 *  when a certain action is performed.
 */

import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { loadState, saveState } from "store/localStorage.js";
import rootReducer from "reducers";
import history from "../history/history";
import throttle from "lodash/throttle";

export const store = createStore(
    connectRouter(history)(rootReducer), //added connected-react-router library to properly link router + redux
    loadState(), //Initialize state to value of saved state
    compose(
        //Allows you to apply several store enhancers in a row
        applyMiddleware(
            //Methods for passing middle ware that extends redux functionality, interacts with actions before they hid the reducer
            thunkMiddleware, //Middleware foor handling of async code and passing dispatch to dispatched functions
            createLogger(), //Middleware for logging of Redux actions
            routerMiddleware(history) //Middleware allows dispatching history actions through the redux store
        )
    )
);

const configureStore = history => {
    store.subscribe(
        //Method that runs each time an action is dispatched
        throttle(() => {
            //Throttle the saveState method call to limit writing to local store to millisecond value 1000
            saveState({
                storePropertyOne: store.getState().propertyOne,
                storePropertyTwo: store.getState().propertyTwo
            });
        }, 1000)
    );

    return store;
};

export default configureStore;
