import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import * as reducers from './reducers';
import initialStateObject from './initialState';
import middleware from './middleware';

const rootReducer = combineReducers(reducers);
const initialState = Immutable.fromJS(initialStateObject);

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
