import {combineReducers} from 'redux'
import authReducer from "./Authreducer";

export default combineReducers({
    auth : authReducer
})