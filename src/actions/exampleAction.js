export const EMAIL_CHANGE    = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const BUTTON_CLICKED  = "BUTTON_CLICKED"; 


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

export const buttonClicked = (event) => {
    console.log("zeynep")
    return {
        type: BUTTON_CLICKED,
    }
}