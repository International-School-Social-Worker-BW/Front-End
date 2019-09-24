//combine reducers here
import { combineReducers } from 'redux';
import { registrationReducer } from './registrationReducer.js'
import { loginReducer } from './registrationReducer.js';

export default combineReducers({
    registrationReducer
})

