import { GET_PRODUCTS , GET_PRODUCTS_REQUEST, GET_PRODUCT, GET_PRODUCT_REQUEST} from "../constants/productConstants";
import axios from 'axios';

export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST });

        const { data } = await axios.get('/api/products');

        dispatch({type: GET_PRODUCTS, payload: data});
    }
    catch(err) {
        console.log(err);
    }
};

export const getProduct = (id) => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST});

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({ type: GET_PRODUCT, payload: data });
    }
    catch(err) {
        console.log(err);
    }
}
