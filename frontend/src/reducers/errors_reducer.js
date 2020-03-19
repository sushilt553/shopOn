import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import ProductsErrorsReducer from "./products_errors_reducer";
import CategoryProductsErrorsReducer from './category_products_errors_reducer';

export default combineReducers({
  products: ProductsErrorsReducer,
  categoryProducts: CategoryProductsErrorsReducer,
  session: SessionErrorsReducer
});
