import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

//add redux devtools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
