import thunk from 'redux-thunk';
import immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const state = immutable.Map({});
const store = reducer(state);

export default applyMiddleware(thunk)(createStore)(reducer, state);
