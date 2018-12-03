//Example Reducer - Should keep state immutable*
import { START_LOADING, STOP_LOADING } from "actions/constants";

//Loading reducer - Queue data structure
export const loadingReducer = (state, action) => {
    switch (action.type) {
        case START_LOADING:
            return [...state, true];
        case STOP_LOADING:
            let loadingQueue = [...state];
            loadingQueue.shift();
            return loadingQueue;
        default:
            return state;
    }
};
