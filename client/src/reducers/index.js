import {combineReducers} from 'redux';
import authReducer from './authReducer';
import visitedReducer from './visitedReducer';
import modeReducer from './modeReducer';

export default combineReducers({
    auth: authReducer,
    visited: visitedReducer,
    mode: modeReducer
});