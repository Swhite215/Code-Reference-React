/*
 * This is the reducer entry point, when the redux store (state of our application)
 * is created, this will take all of the reducers specified in other files and
 * use them to generate the structure of our initial state
 */
import { combineReducers } from "redux";

import { somethingReducer } from "reducers/reducerOne";
import { loadingReducer } from "reducers/reducerTwo";
import { reducerThree } from "reducers/reducerThree";
import { reducerFour } from "reducers/reducerFour";
import { reducerFive } from "reducers/reducerFive";

const rootReducer = combineReducers({
    somethingReducer,
    loadingReducer,
    reducerThree,
    reducerFour,
    reducerFive
});

export default rootReducer;
