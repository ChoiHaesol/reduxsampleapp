import { combineReducers } from "redux";
import product from "./product";
import member from "./member";

const rootReducer = combineReducers({ product, member });
export default rootReducer;
