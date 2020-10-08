import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SUCCESS = "GET_SUCCESS";
export const NEW_CARD = "NEW_CARD"
export const NEW_CARD_SUCCESS = "NEW_CARD_SUCCESS"

export const getCategories = (token) => {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES
        })
        axios.get(`${API_BASE}/task-categories`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            //  data: JSON.stringify({fullName: fullName, email: email, password: password, phoneToken: “hhssssssdassshhsssaaa”,})
         }).then((result) => {
             dispatch({
                 type: GET_SUCCESS,
                 payload: result.data.data
             })
         }).catch((err) => {
             console.log("get işlemi gerceklesmedi");
         })
    }
}

export const newCard =(cat_id, title, body, user_id , token) => {
    return dispatch => {
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
               data: { title: title, subTitle: body, user_id: user_id, cat_id: cat_id}
           }).then((result) => {
               if(result.data.status == "success"){
               dispatch({
                type: NEW_CARD_SUCCESS,
                payload: result.data.data
              })
               Actions.Main()
               }
           }).catch((err) => {
               Alert.alert("Uyarı",'Yeni kart oluşturulamadı.')
           })
   }}