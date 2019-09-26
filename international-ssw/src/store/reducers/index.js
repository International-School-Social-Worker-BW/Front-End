//combine reducers here
import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducer.js'
import { loginReducer } from './loginReducer.js';
import { roleReducer } from './roleReducer.js'
import { studentReducer } from './studentReducer.js';

export default combineReducers({
    registrationReducer, loginReducer, roleReducer, studentReducer
})

