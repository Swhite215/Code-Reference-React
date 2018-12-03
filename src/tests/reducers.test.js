//Tests should reside in same folder as file you are testing
//Describe - Test Suite, It - what function should do, Expect - compare prediction to produced value

import { somethingReducer } from "../redux/reducers/reducerOne";

import * as types from "../redux/actions/constants";

describe("something reducer", () => {
    it("should return the initial state, empty", () => {
        expect(something(undefined, {})).toEqual([]);
    });

    it("should handle ADD_SOMETHING and store every something", () => {
        const actionOne = {
            type: types.ADD_SOMETHING,
            something: {
                name: "Test"
            }
        };

        const stateOne = [{ name: "Test" }];
        expect(something(undefined, actionOne)).toEqual(stateOne);
    });

    it("should handle EDIT_SOMETHING and update something", () => {
        const actionOne = {
            type: types.EDIT_SOMETHING,
            something: {
                name: "Test Two",
                id: 1
            }
        };

        const stateOne = [{ name: "Test", id: 1 }];
        const stateTwo = [{ name: "Test Two", id: 1 }];

        expect(something(stateOne, actionOne)).toEqual(stateTwo);
    });

    it("should handle REMOVE_SOMETHING and remove the thing from state", () => {
        const actionOne = {
            type: types.REMOVE_SOMETHING,
            id: 1
        };

        const stateOne = [{ name: "Test", id: 1 }];
        const stateTwo = [];

        expect(something(stateOne, actionOne)).toEqual(stateTwo);
    });
});
