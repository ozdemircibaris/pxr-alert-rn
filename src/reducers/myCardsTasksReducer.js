import {
    CREATE_NEW_CARD,
    CREATE_NEW_CARD_SUCCESS,
    DELETE_CARD,
    DELETE_CARD_SUCCESS,
    LIST_CARD,
    LIST_CARD_SUCCESS,
} from "../actions/myCardsTasksAction";
const INITIAL_STATE = {
    cards: [],
    mainCards: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_NEW_CARD:
            return {
                ...state,
            }
        case CREATE_NEW_CARD_SUCCESS:
            return {
                ...state,
                cards: state.cards.concat(action.payload),
                mainCards: state.mainCards.concat(action.payload)
            }
        case DELETE_CARD:
            return {
                ...state,
            }
        case DELETE_CARD_SUCCESS:
            let index = state.mainCards.indexOf(action.payload);
            console.log("index", index)
            state.mainCards.splice(index, 1)
            return {
                ...state,
                deleteCount: state.deleteCount + 1
            }
        case LIST_CARD:
            return {
                ...state,
                mainCards: []
            }
        case LIST_CARD_SUCCESS:
            return {
                ...state,
                mainCards: state.mainCards.concat(action.payload)
            }
        default:
            return state;
    }
}