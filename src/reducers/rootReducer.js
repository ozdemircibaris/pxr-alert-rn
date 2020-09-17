import { combineReducers } from "redux";
import  authenticationReducer from '../reducers/authenticationReducer';
import usersReducer from '../reducers/usersReducer';


export default combineReducers({
    authenticationReducer,
    usersReducer
})