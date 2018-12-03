//Example Reducer - Should keep state immutable*
import {
    ADD_SOMETHING,
    EDIT_SOMETHING,
    REMOVE_SOMETHING
} from "actions/constants";

//Helpful module for generating unique IDs
const uuid = require("uuid/v4");

//Reducers take the state and an action and return the new state
export const somethingReducer = (state, action) => {
    switch (action.type) {
        case ADD_SOMETHING:
            return {
                ...action.something,
                id: uuid()
            };
        case EDIT_SOMETHING:
            return {
                ...state,
                ...action.something
            };
        case REMOVE_SOMETHING:
            return state.filter(something => something.id !== action.id);
        default:
            return state;
    }
};
