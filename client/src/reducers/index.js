import {combineReducers} from 'redux';
import authReducer from './authReducer';
import visitedReducer from './visitedReducer';

export default combineReducers({
    auth: authReducer,
    visited: visitedReducer
});