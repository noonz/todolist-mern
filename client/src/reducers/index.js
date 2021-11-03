import { combineReducers } from 'redux';
import itemReducer from './ItemReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});