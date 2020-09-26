import {
    GET_CATEGORIES,
    GET_SUCCESS,
    NEW_CARD,
    SUCCESS
} from "../actions/createTaskAction";
const INITIAL_STATE = {
    categories: [],
    cards: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
            }
        case GET_SUCCESS:
            console.log('zeynep:',action.payload)
            return {
                ...state,
                categories: action.payload
            }
            case NEW_CARD:
            return {
                ...state,
            }
            case SUCCESS:
                return {
                    ...state,
                    cards: state.cards.concat(action.payload)
                }
        default:
            return state;
    }
}