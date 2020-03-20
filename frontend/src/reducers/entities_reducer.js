import { combineReducers } from "redux";
import productsReducer from './products_reducer';
import categoryProductsReducer from './category_products_reducer';
import categoriesReducer from './categories_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    searchProducts: searchReducer
})

export default entitiesReducer;