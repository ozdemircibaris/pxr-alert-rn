export const ZSU_INPUT_CHANGE = "ZSU_INPUT_CHANGE";

export const zsuInputChange = (value) => {
    return {
        type: ZSU_INPUT_CHANGE,
        payload: value
    }
}