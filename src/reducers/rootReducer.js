import { combineReducers } from "redux";
import authenticationReducer from '../reducers/authenticationReducer';
import usersReducer from '../reducers/usersReducer';
import myCardsTasksReducer from '../reducers/myCardsTasksReducer';
import tasksReducer from '../reducers/tasksReducer';


export default combineReducers({
    authenticationReducer,
    usersReducer,
    myCardsTasksReducer,
    tasksReducer,
})