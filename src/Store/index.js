import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../Users/reducer";
import uiReducer from "../ui/Messages/reducer";
const rootReducer = combineReducers({
  users: userReducer,
  ui: uiReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
