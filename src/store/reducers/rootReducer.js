import {combineReducers} from "redux";
import authReducer from "./authReducer";
import appsReducer from "./appsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    app : appsReducer
})