import { SELECT_USERS, CHECKED_SUCCESS, LIST_USERS, LIST_SUCCESS, UNSELECT_USERS } from "../actions/usersAction";

const INITIAL_STATE = {
  selectedId: "",
  usersId: [],
  count: "",
  users: [],
  tasks: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_USERS:
      let counter = 0;
      if(state.usersId.length == 0){
        return{
          ...state,
          count: state.count + 1,
          selectedId: action.payload,
          usersId: state.usersId.concat(action.payload)
        }
      }else{
        state.usersId.map((item) =>{
          if(item == action.payload){
            counter = counter + 1;
          }
        })
        if(counter == 0){
          return{
            ...state,
            count: state.count + 1,
            selectedId: action.payload,
            usersId: state.usersId.concat(action.payload)
          }
        }else{
          return{
            ...state,
            count: state.count + 1,
            selectedId: action.payload
          }
        }
      }
      case UNSELECT_USERS:
        let index = state.usersId.indexOf(action.payload);
        for( var i = 0; i < state.usersId.length; i++){
          if ( state.usersId[i] === action.payload) { 
            return{
              ...state,
              userUd: state.usersId.splice(index, 1)
            }
          }
       }
      case CHECKED_SUCCESS:
      return {
          ...state,
      }
      case LIST_USERS:
      return {
          ...state,
      }
      case LIST_SUCCESS:
        console.log("usersmap: ", action.payload)
      return {
          ...state,
          users: state.users.concat(action.payload)
      }
      
    default:
      return state;
  }
}