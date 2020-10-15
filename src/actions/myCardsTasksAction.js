import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

export const CREATE_NEW_CARD = "create_new_card";
export const CREATE_NEW_CARD_SUCCESS = "create_new_card_success";
export const DELETE_CARD= "delete_card";
export const DELETE_CARD_SUCCESS = "delete_card_success";
export const LIST_CARD = "list_card";
export const LIST_CARD_SUCCESS = "list_card_success";

export const createNewCard =(cat_id, title, body, user_id , token) => {
    return dispatch => {
        dispatch({
            type: CREATE_NEW_CARD
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
                type: CREATE_NEW_CARD_SUCCESS,
                payload: result.data.data
              })
               Actions.Main()
               }
           }).catch((err) => {
               Alert.alert("Uyarı",'Yeni kart oluşturulamadı.')
           })
   }
}

export const deleteCard = (itemId, token, item) => {
    return dispatch => {
        dispatch({
            type: DELETE_CARD
        })
        axios({
            method: "DELETE",
            url: `${API_BASE}/mytasks/delete/${itemId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
         }).then((result) => {
           dispatch({
             type: DELETE_CARD_SUCCESS,
             payload: item
           })
         }).catch((err) => {
             console.log("silme işlemi gerceklesmedi");
         })
    }
}

export const listCard = (token, id,cards) => {
    return dispatch => {
      dispatch({
        type: LIST_CARD
      })
      axios({
        method: "GET",
        url: `${API_BASE}/mytasks/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        }).then((res) => {
          console.log('res', res.data)
        dispatch({
          type: LIST_CARD_SUCCESS,
          payload: res.data.data
        })
    })
    .catch((error) => {
    })
    }
  }