export const BUTTON_CLICKED = "BUTTON_CLICKED";

export const buttonClicked = () => {
    alert('basıldı');
    return {
        type: BUTTON_CLICKED,
        
    }
}