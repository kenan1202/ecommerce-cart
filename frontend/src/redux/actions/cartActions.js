import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "../constants/cartContants";

export const addItemToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const changeQuantity = (item) => {
    return {
        type: CHANGE_QUANTITY,
        payload: item
    }
}
