import { combineReducers } from "redux";
import userReducer from "./auth/reducer";
import productsReducer from "./homepage/reducer";
import detailsProductsReducer from "./DetailsPage/reducer";
const reducer = combineReducers({
  // someFeature: someFeatureReducer
  // etc...
  user: userReducer,
  products: productsReducer,
  product: detailsProductsReducer,
});

export default reducer;
