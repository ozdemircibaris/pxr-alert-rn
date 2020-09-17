export const SELECT_USERS = "SELECT_USERS";
export const CHECKED_SUCCESS = "CHECKED_SUCCESS";

export const selectUsers = ( item, selectedId ) => {
  return dispatch => {
    item.selected = "true";
    dispatch({
      type: SELECT_USERS,
      payload: item.id
    })
    if(selectedId == item.id){  
      item.selected = "true";
      
    }
      
  }
   
}