import { combineReducers } from "redux";
import productsReducer from './products_reducer';
import categoryProductsReducer from './category_products_reducer';
import categoriesReducer from './categories_reducer';
import searchReducer from './search_reducer';
import reviewsReducer from './reviews_reducer';
import cartReducer from './cart_reducer';
import orderReducer from './order_reducer';
import rewardsReducer from './rewards_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    searchProducts: searchReducer,
    reviews: reviewsReducer,
    cartProducts: cartReducer,
    orderProducts: orderReducer,
    rewards: rewardsReducer 
})

export default entitiesReducer;