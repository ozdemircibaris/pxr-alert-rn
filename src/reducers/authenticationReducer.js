import{
    FULL_NAME_CHANGE,
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    SIGN_UP_CLICK,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    SIGN_IN_CLICK,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    LOG_OUT_CLICK,
    LOG_OUT_SUCCESS
} from "../actions/authenticationAction";

const INITIAL_STATE = {
    fullNameValue: "",
    emailValue: "bariss",
    passwordValue: "123456",
    idValue: "",
    userData:"",
    isAuthLogin: false,
    isMainLogin: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_UP_CLICK:
            return {
                ...state,
            }
        case SIGN_UP_SUCCESS:
            return{
                ...state,
            }
        case SIGN_UP_FAILED:
            return{
                ...state,
                }
        case FULL_NAME_CHANGE:
            return {
                ...state,
                fullNameValue: action.payload
                            }
        case EMAIL_CHANGE:
            return {
                ...state,
                emailValue: action.payload
                    }
        case PASSWORD_CHANGE:
            return {
                ...state,
                passwordValue: action.payload
                        }
        case SIGN_IN_CLICK:
            return {
                ...state,
                            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                idValue: action.payload.id,
                userData: action.payload.data,
                isMainLogin: true
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
            }

        case LOG_OUT_CLICK:
            return {
                ...state,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isMainLogin: false,
                isAuthLogin: true,
            }
            default:
                return state;
    }
}