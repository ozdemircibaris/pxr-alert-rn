import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUCCESS = "GET_SUCCESS";
export const NEW_CARD = "NEW_CARD"
export const SUCCESS = "SUCCESS"

export const getCategories = (value) => {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES
        })
        axios.get(`${API_BASE}/task-categories`,{
            headers: {
                'Authorization': `Bearer ${value}`
            },
            //  data: JSON.stringify({fullName: fullName, email: email, password: password, phoneToken: “hhssssssdassshhsssaaa”,})
         }).then((result) => {
             console.log("resultttt" , result.data.data)
             dispatch({
                 type: GET_SUCCESS,
                 payload: result.data.data
             })
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             console.log("get işlemi gerceklesmedi");
         })
    }
}

export const newCard =(cat_id, title, body, user_id , token) => {
    return dispatch => {
        console.log("oldu mu", user_id)
        dispatch({
            type: NEW_CARD
        })
       axios({
           method: "POST",
           url: `${API_BASE}/mytasks/add`,
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': `Bearer ${token} ` 
           },
               data: { title: title, subTitle: body, user_id: user_id, cat_id: "1"}     
           }).then((result) => {
               console.log("resultttt" , result.data)
               if(result.data.status == "success"){
               console.log("Başarılı")
               dispatch({
                type: SUCCESS,
                payload: result.data.data
              })
               Actions.Main()
               
               }
           }).catch((err) => {
               console.log('errorcard', err.response)
               alert('başarısız')
           })
   }}