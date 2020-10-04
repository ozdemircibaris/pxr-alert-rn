import { connect } from "react-redux";
import{
    GET_MYTASKS ,GET_MTSUCCESS, DELETE_TASK, DELETE_SUCCESS
} from "../actions/MyTasksAction";



const INITIAL_STATE = {
    myTasks: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_MYTASKS:
            return {
                ...state, 
                myTasks: []
            }
            case GET_MTSUCCESS:
                console.log("tasksmap: ", action.payload)
            return {
                ...state,
                myTasks: state.myTasks.concat(action.payload)   
            }
            case DELETE_TASK:
            return {
                ...state, 
            }
            case DELETE_SUCCESS:
            return {
                ...state, 
            }
            default:
         return state;}
}

