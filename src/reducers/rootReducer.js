import { combineReducers } from "redux";
import  authenticationReducer from '../reducers/authenticationReducer';
import usersReducer from '../reducers/usersReducer';
import mainReducer from '../reducers/mainReducer';
import createTaskReducer from '../reducers/createTaskReducer';
import MyTasksReducer from '../reducers/MyTasksReducer';



export default combineReducers({
    authenticationReducer,
    usersReducer,
    mainReducer,
    createTaskReducer,
    MyTasksReducer
})