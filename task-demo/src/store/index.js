
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { formReducer } from './form.redux';
import { logger } from 'redux-logger';
const store = createStore(
    combineReducers({form: formReducer}),
    applyMiddleware(logger)
);

export default store;