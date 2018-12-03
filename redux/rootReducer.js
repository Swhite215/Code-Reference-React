/*
 * This is the reducer entry point, when the redux store (state of our application)
 * is created, this will take all of the reducers specified in other files and
 * use them to generate the structure of our initial state
 */
import { combineReducers } from "redux";

import { reducerOne } from "reducers/one";
import { reducerTwo } from "reducers/two";
import { reducerThree } from "reducers/three";
import { reducerFour } from "reducers/four";
import { reducerFive } from "reducers/five";

const rootReducer = combineReducers({
    reducerOne,
    reducerTwo,
    reducerThree,
    reducerFour,
    reducerFive
});

export default rootReducer;
