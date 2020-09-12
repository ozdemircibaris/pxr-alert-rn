import { SELECT_USERS, CHECKED_SUCCESS } from "../actions/usersAction";

const INITIAL_STATE = {
  selectedId: "",
  usersId: [],
  a: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_USERS:
      return {
          ...state,
          selectedId: action.payload,
          usersId: state.usersId.concat(action.payload)
      }
    case CHECKED_SUCCESS:
      return {
          ...state,  
      }
    default:
      return state;
  }
}