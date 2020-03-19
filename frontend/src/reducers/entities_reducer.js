import { combineReducers } from "redux";
import productsReducer from './products_reducer';
import categoryProductsReducer from './category_products_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    categoryProducts: categoryProductsReducer
})

export default entitiesReducer;