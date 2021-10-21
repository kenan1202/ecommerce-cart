import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProducReducer} from './reducers/productReducers';
import cartReducer from './reducers/cartReducers';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProduct: getProducReducer,
    carts: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;