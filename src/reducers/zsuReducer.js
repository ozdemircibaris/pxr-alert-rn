import { ZSU_INPUT_CHANGE } from "../actions/zsuAction";

const INITIAL_STATE = {
    zsuInputValue: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ZSU_INPUT_CHANGE:
            return {
                ...state,
                zsuInputValue: action.payload
            }
        default:
            return state;
    }
}