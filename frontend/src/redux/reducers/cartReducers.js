import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "../constants/cartContants";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            // const cartItem = state.find(el => el._id === act\ion.payload._id);

            return state.filter(el => el.product._id !== action.payload._id);

        case CHANGE_QUANTITY:
            const cartItemIndex = state.findIndex(el => el.product._id === action.payload.product._id);
            state[cartItemIndex] = {...action.payload};

            return [...state];
        
        default:
            return state;
    }
}

export default cartReducer;