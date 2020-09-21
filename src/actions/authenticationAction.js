import axios from 'axios'
import { API_BASE } from '../components/config/env'
import { Actions } from 'react-native-router-flux';
import { createPersistoid } from 'redux-persist';
export const EMAIL_CHANGE    = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const FULL_NAME_CHANGE   = "FULL_NAME_CHANGE";

export const SIGN_UP_CLICK        = "sign_up_click";
export const SIGN_UP_SUCCESS      = "sign_up_success";
export const SIGN_UP_FAILED       = "sign_up_failed";

export const SIGN_IN_CLICK          = "sign_in_click";
export const SIGN_IN_SUCCESS        = "sign_in_success";
export const SIGN_IN_FAILED         = "sign_in_failed";

export const fullNameChange = (value) => {
    return {
        type: FULL_NAME_CHANGE,
        payload: value
    }
}

export const emailChange = (value) => {
    return {
        type: EMAIL_CHANGE,
        payload: value
    }
}

export const passwordChange = (value) => {
    return {
        type: PASSWORD_CHANGE,
        payload: value
    }
}


export const signUpClicked = (fullName, email, password) => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK,
        })
        console.log({fullName, email, password});
        axios({
            method: "POST",
            url: `${API_BASE}/users/signup`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             data: JSON.stringify({fullName: fullName, email: email, password: password, phoneToken: "hhssssssdassshhsssaaa",})       
         }).then((result) => {
             console.log("resultttt" , result.data)
             if(result.data.status == "success"){
                Actions.signIn()
                dispatch({
                    type: SIGN_UP_SUCCESS,
                })
                
             }
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             alert('kayıt olamadınız')
         })
    }
}

export const signInClicked = ( email, password) => {
    return dispatch => {
        dispatch({
            type: SIGN_IN_CLICK,
        })
        console.log({ email, password});
        axios({
            method: "POST",
            url: `${API_BASE}/users/signin`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
             data: JSON.stringify({ email: email, password: password })       
         }).then((result) => {
             console.log("resultttt" , result.data)
             console.log("zeynepin logu " , result.data.data.fullName)
             
             if(result.data.status == "success"){
                 console.log("user Id", result.data.data.id)
                   Actions.Main()
                
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: {id: result.data.data.id, data: result.data}
                })

                    
             }
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             alert('HATALI ŞİFRE VEYA E-POSTA')
         })
    }
}


