import { combineReducers } from 'redux-immutablejs';
import userInfo from './users.js';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  userInfo,
  form: (state = Immutable.fromJS({}), action) => 
			Immutable.fromJS(formReducer(state.toJS(), action)),
});
