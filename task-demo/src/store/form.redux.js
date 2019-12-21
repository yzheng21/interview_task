import {LOAD_DATA, UPDATE_DATA} from '../action';

export const formReducer = (state={}, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                data: action.data
            };
        case UPDATE_DATA:
            return {
                data: action.newData
            };
        default:
            return state;
    }
};

export const load = data => ({type: LOAD_DATA, data});
export const update = newData => ({type: UPDATE_DATA, newData});
