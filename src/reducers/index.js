import { combineReducers } from "redux";
import plantReducer from "./plants";

const allReducers = combineReducers({ plantCollection: plantReducer });

export default allReducers;
