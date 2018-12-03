//Tests should reside in same folder as file you are testing
//Describe - Test Suite, It - what function should do, Expect - compare prediction to produced value

import {
    addSomething,
    editSomething,
    removeSomething,
    beginAsyncAction,
    failureAsyncAction,
    endAsyncAction,
    startLoading,
    stopLoading
} from "../redux/actions/actionCreators";

import * as types from "../redux/actions/constants";

describe("something action creators", () => {
    it("should create an action to add something", () => {
        const something = "Test";
        const action = { type: types.ADD_SOMETHING, something };
        expect(addSomething(something)).toEqual(action);
    });

    it("should create an action to edit something", () => {
        const something = "Test";
        const action = { type: types.EDIT_SOMETHING, something };
        expect(editSomething(something)).toEqual(action);
    });

    it("should create an action to remove something", () => {
        const id = 1;
        const action = { type: types.REMOVE_SOMETHING, 1 };
        expect(removeSomething(id)).toEqual(action);
    });

    it("should create an action to begin an async request", () => {
        const action = { type: types.FETCH_SOMETHING, status: "pending"};
        expect(beginAsyncAction()).toEqual(action);
    });

    it("should create an action for failed async request", () => {
        const error = "err";
        const action = { type: types.FETCH_SOMETHING, status: "failure", err: "err" };
        expect(failureAsyncAction(error)).toEqual(action);
    });

    it("should create an action to end an async request", () => {
        const data = "1";
        const action = { type: types.FETCH_SOMETHING, status: "success", data: "1" };
        expect(endAsyncAction(data)).toEqual(action);
    });

    it("should create an action to start loading", () => {
        const action = { type: types.START_LOADING, isLoading: true };
        expect(startLoading()).toEqual(action);
    });

    it("should create an action to stop loading", () => {
        const action = { type: types.STOP_LOADING, isLoading: false};
        expect(stopLoading()).toEqual(action);
    });


});
