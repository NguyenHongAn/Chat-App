import {combineReducers} from 'redux';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const allReducers = combineReducers({
    authReducer: authReducer,
    chatReducer: chatReducer,
})

export default allReducers;