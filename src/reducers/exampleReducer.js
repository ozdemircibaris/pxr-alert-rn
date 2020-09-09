import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE
} from "../actions/exampleAction";

const INITIAL_STATE = {
    emailValue: "",
    passwordValue: "",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                emailValue: action.payload
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                passwordValue: action.payload
            }
        default:
            return state;
    }
}