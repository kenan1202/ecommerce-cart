// import getProducts from "../actions/productActions";
import { GET_PRODUCTS, GET_PRODUCTS_REQUEST, GET_PRODUCT_REQUEST, GET_PRODUCT } from "../constants/productConstants";

// const initialState = {
//     products: []
// };


export const getProductsReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS:
            return {
                loading: false,
                products: action.payload
            }
        default:
            return state;
    }
};

export const getProducReducer = (state = { product: {} }, action) => {
    switch(action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT:
            return {
                loading: false,
                product: action.payload
            }
        default:
            return state;
    }
}
