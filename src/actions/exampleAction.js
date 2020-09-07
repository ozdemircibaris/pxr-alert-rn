export const EMAIL_CHANGE    = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const SIGNIN_CLICK    = "SIGNIN_CLICK";


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

export const signinClick = (value) => {
    alert("butona basıldı");
    return {
        type: SIGNIN_CLICK,
    }
}