import { combineReducers } from "redux";
import  authenticationReducer from '../reducers/authenticationReducer';
import usersReducer from '../reducers/usersReducer';
import cardsReducer from '../reducers/cardsReducer';
import tasksReducer from '../reducers/tasksReducer';


export default combineReducers({
    authenticationReducer,
    usersReducer,
    cardsReducer,
    tasksReducer,
    
})