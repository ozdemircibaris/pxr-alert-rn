import axios from 'axios';
import { API_BASE } from '../components/config/env';

export const FETCH_USERS = "fetch_users";
export const SELECTED_USER = "selected_user";

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

 export const selectedUser = (value) => {
   return {
    type: SELECTED_USER,
    payload: value
   }
 }
