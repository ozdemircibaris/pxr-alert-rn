import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';

export const CHECKED_SUCCESS = "CHECKED_SUCCESS";
export const CREATE_TASK = "CREATE_TASK";
export const FETCH_USERS = "fetch_users";

export const SELECTED_USER = "selected_user"

export const listUsers = (token) => {
  return dispatch => {
    axios({
      method: "GET",
      url: `${API_BASE}/users`,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token} `
      },  
      }).then((res) => {
      dispatch({
        type: FETCH_USERS,
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
             Actions.Main();
             }
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             Alert.alert("Uyarı","Kitleme başarısız.")
         })
        }
 }


 export const selectedUser = (value) => {
   return {
    type: SELECTED_USER,
    payload: value
   }
 }