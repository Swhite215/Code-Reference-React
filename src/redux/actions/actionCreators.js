import {
    ADD_SOMETHING,
    EDIT_SOMETHING,
    REMOVE_SOMETHING,
    FETCH_SOMETHING,
    START_LOAD,
    STOP_LOAD
} from "./constants";

import getFunction from "../services/ajax";

//Basic Action Creators
export const addSomething = something => ({ type: ADD_SOMETHING, something });
export const editSomething = something => ({ type: EDIT_SOMETHING, something });
export const removeSomething = id => ({ type: REMOVE_SOMETHING, id });

//Async Action Creators
export const beginAsyncAction = () => ({
    type: FETCH_SOMETHING,
    status: "pending"
});

export const failureAsyncAction = err => ({
    type: FETCH_SOMETHING,
    status: "failure",
    err: err
});

export const endAsyncAction = data => ({
    type: FETCH_SOMETHING,
    status: "success",
    campaign: data
});

//Loading Action Creators
export const startLoading = () => ({ type: START_LOAD, isLoading: true });
export const stopLoading = () => ({ type: STOP_LOAD, isLoading: false });

//Async Function for use with Redux Thunk - MUST BE DISPATCHED!
export const fetchSomething = () => {
    return async dispatch => {
        dispatch(beginAsyncAction());
        dispatch(startLoading());

        let response;

        try {
            response = await getFunction();
            dispatch(endAsyncAction(response));
        } catch (err) {
            dispatch(failureAsyncAction(err));
        }

        dispatch(stopLoading());
    };
};
