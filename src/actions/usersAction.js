import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';

export const SELECT_USERS = "SELECT_USERS";
export const CHECKED_SUCCESS = "CHECKED_SUCCESS";
export const CREATE_TASK = "CREATE_TASK";
export const LIST_USERS = "LIST_USERS";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const UNSELECT_USERS = "UNSELECT_USERS";

export const selectUsers = ( item, selectedId, count) => {
  return dispatch => {
    console.log(count);
    item.selected = "true";
    dispatch({
      type: SELECT_USERS,
      payload: item.id
    })
    if(selectedId == item.id){
      dispatch({
        type: CHECKED_SUCCESS
      })
      if(count % 2 == 1){
        item.selected = "true";
      }else{
        item.selected = "false";
        dispatch({
          type: UNSELECT_USERS,
          payload: item.id
        })
      }
    }
      
  }
   
}

export const listUsers = (token) => {
  return dispatch => {
    dispatch({
      type: LIST_USERS
    })
    axios({
      method: "GET",
      url: `${API_BASE}/users`,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token} ` 
      },  
      }).then((res) => {
      res.data.data.map((item) => {
          item.selected = "false"
      })
      dispatch({
        type: LIST_SUCCESS,
        payload: res.data.data
      })
  })
  .catch((error) => {
      console.log("error :", error)
  })
  }
}

export const createTask =(title, body, date, cat_id , user_id, token) => {
  
  return dispatch => {
    console.log("id", user_id)
    dispatch({
      type: CREATE_TASK
    })
     axios({
         method: "POST",
         url: `${API_BASE}/tasks`,
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
             'Authorization': `Bearer ${token} ` 
         },
             data: {cat_id: cat_id, title: title, subTitle: body, jobDate: date, user_id: user_id}     
         }).then((result) => {
             console.log("resultttt" , result.data)
             if(result.data.status == "success"){
             console.log("Başarılı")
             Actions.mytasks();
             
             }
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             alert('başarısız')
         })
        }
 }