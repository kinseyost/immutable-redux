import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import initialStateObject from './initialState';
import { ioMiddleware } from './middleware';
import thunk from 'redux-thunk';

const initialState = Immutable.fromJS(initialStateObject);
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(thunk, ioMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
