import { combineReducers } from "redux";
import userReducer from "./auth/reducer";

const reducer = combineReducers({
  // someFeature: someFeatureReducer
  // etc...
  user: userReducer,
});

export default reducer;
