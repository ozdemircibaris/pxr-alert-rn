import { FETCH_USERS, CHECKED_SUCCESS, LIST_SUCCESS, SELECTED_USER  } from "../actions/usersAction";

const INITIAL_STATE = {
  selectedId: "",
  usersId: [],
  count: "",
  users: [],
  tasks: [],
  selectedUsers: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKED_SUCCESS:
      return {
        ...state,
      }
    case FETCH_USERS:
      action.payload.map((item) => {
        item.selected = false;
      })
      return {
        ...state,
        users: action.payload,
        selectedUsers: []
      }
    case SELECTED_USER:
      state.users.map((item) => {
        if(item.id == action.payload && item.selected == false) {
          item.selected = true;
          state.selectedUsers = state.selectedUsers.concat(action.payload)
        } else if(item.id == action.payload && item.selected == true) {
          item.selected = false
          let index = state.selectedUsers.indexOf(action.payload);
          console.log("index :", index)
          state.selectedUsers.splice(index, 1)
        }
      })
      return {
        ...state,
        selectedUsers: [...state.selectedUsers],
      }
    default:
      return state;
  }
}