import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    LIST_TASKS,
    LIST_TASKS_SUCCESS,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DATE_MAP,
    DATE_SORT,
    GET_TASK_MIN_DATE,
    GET_TASKS,
    GET_TASKS_SUCCESS,
    TASKS_MAP,
    FETCH_TASKS_FINALLY
} from "../actions/tasksAction";
const INITIAL_STATE = {
    categories: [],
    myTasks: [],
    tasks: [],
    taskDate: [],
    dateArray: [],
    sorted: [],
    sortedMin: [],
    minDate: [],
    minTaskDate: "",
    tasksFinallyValue:""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                categories: action.payload
            }
        case GET_TASKS:
            return {
                ...state,
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                myTasks: state.myTasks.concat(action.payload)
            }
        case TASKS_MAP:
            state.myTasks.map((item) => {
                return {
                    ...state,
                    tasks: state.tasks.push(item),
                    taskDate: state.taskDate.push(item.jobDate)
                }
            })
        case DATE_MAP:
            state.taskDate.map((a) => {
                if (new Date() < new Date(a)) {
                    return {
                        ...state,
                        dateArray: state.dateArray.push(a)
                    }
                }
            })
            return {
                ...state,
            }
        case DATE_SORT:
            return {
                ...state,
                sorted: action.payload.sorted,
                sortedMin: action.payload.sortedMin
            }
        case GET_TASK_MIN_DATE:
            state.tasks.map((item) => {
                if (item.jobDate == state.sortedMin) {
                    state.minDate.push(item)
                }
            })
            return {
                ...state,
                minTaskDate: state.minDate[0]
            }
        case DELETE_TASK:
            return {
                ...state,
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
            }
        case FETCH_TASKS_FINALLY:
            return {
                ...state,
                tasksFinallyValue: "finally"
            }
        default:
            return state;
    }
}