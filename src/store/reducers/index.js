import {combineReducers} from 'redux';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

const allReducers = combineReducers({
    auth: authReducer,
    chat: chatReducer,
})

export default allReducers;