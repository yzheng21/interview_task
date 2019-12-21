import {LOAD_DATA, UPDATE_DATA} from '../action';

export const formReducer = (state=[], action) => {
    switch (action.type) {
        case LOAD_DATA:
            return action.data;
        case UPDATE_DATA:
            state.forEach(item => {
                if (item.id === Number(action.newData.id)) {
                    item.completed = action.newData.completed;
                }
            });
            return [...state];
        default:
            return state;
    }
};

export const load = data => ({type: LOAD_DATA, data});
export const update = newData => ({type: UPDATE_DATA, newData});
