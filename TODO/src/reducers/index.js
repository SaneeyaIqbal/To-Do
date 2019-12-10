import { combineReducers } from "redux";

const INITIAL_STATE = {
    items: [
        { title: 'Buy iPhone' },
        { title: 'Buy MacBook' },
    ]
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ITEM_CREATED':
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    todo: todosReducer,
})