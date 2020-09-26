import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';

export const GET_MYTASKS = "GET_MYTASKS";
export const GET_MTSUCCESS = "GET_MTSUCCESS";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const getData= (token, id) => {
    return dispatch => {
        dispatch({
          type: GET_MYTASKS
        })
        axios({
          method: "GET",
          url: `${API_BASE}/tasks/${id}`,
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}` 
          },  
          }).then((res) => {
              
          
          dispatch({
            type: GET_MTSUCCESS,
            payload: res.data.data
          })
      })
      .catch((error) => {
          console.log("ERROR MYtasks :", error)
      })
      }}

      export const deleteTask = (item, token) => {
        return dispatch => {
            dispatch({
                type: DELETE_TASK
            })
            console.log("value:", item)
            axios({
                method: "DELETE",
                url: `${API_BASE}/tasks/${item.item.id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                //  data: JSON.stringify({fullName: fullName, email: email, password: password, phoneToken: "hhssssssdassshhsssaaa",})       
             }).then((result) => {
                console.log("resultttt" , result)
                 if(result.status == 200){
                     dispatch({
                    type: DELETE_SUCCESS,
                    payload: item
                })
                 }
                 
                
             }).catch((err) => {
                 console.log('errorrrruurr', err.response)
                 console.log("silme işlemi gerceklesmedi");
             })
        }
    }
