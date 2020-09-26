import{
    DELETE_CLICK, LIST_CARD, LIST_CARD_SUCCESS, LIST_TASKS, LIST_TASKS_SUCCESS,DATE_MAP,
    DATE_SORT,
    GET_MIN_TASK,
    GET_TASKS,
    GET_TASKS_SUCCESS,
    TASKS_MAP
} from "../actions/mainAction";


const INITIAL_STATE = {
    idValue :"",
    mainCards: [],
    mainTasks: [],
    mission: [],
    tasks: [],
    missionDate: [],
    dateArray: [],
    sorted: [],
    sortedMin: [],
    minDate: [],
    taskDate: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case DELETE_CLICK:
            return {
                ...state, 
            }
            case LIST_CARD:
            return {
                ...state, 
            }
            case LIST_CARD_SUCCESS:
            return {
                ...state, 
                mainCards: state.mainCards.concat(action.payload)  
            }
            case LIST_TASKS:
            return {
                ...state, 
            }
            case LIST_TASKS_SUCCESS:
                //console.log("tasksmap: ", action.payload)
            return {
                ...state,
                mainTasks: state.mainTasks.concat(action.payload)  
            }
            case GET_TASKS:
            return {
                ...state,
                mission: action.payload
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                mission: state.mission.concat(action.payload)
            }
        case TASKS_MAP:
            state.mission.map((item) => {
                    return{
                        ...state,
                        tasks: state.tasks.push(item),
                        missionDate: state.missionDate.push(item.jobDate)
                    }
            })
        case DATE_MAP:
            state.missionDate.map((a) => {
                if (new Date() < new Date(a) ) {
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
        case GET_MIN_TASK:
            state.tasks.map((item) => {
                if (item.jobDate == state.sortedMin) {
                    return {
                        ...state,
                        minDate: state.minDate.push(item),
                        taskDate: state.minDate[0]
                    }
                }
            })
            default:
                    return state;
                
                }
            }