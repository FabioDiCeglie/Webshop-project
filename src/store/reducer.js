import { combineReducers } from "redux";
import userReducer from "./auth/reducer";
import productsReducer from "./homepage/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  // etc...
  user: userReducer,
  products: productsReducer,
});

export default reducer;
