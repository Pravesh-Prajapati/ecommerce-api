import { createStore,combineReducers,applyMiddleware } from "redux";
import { SignInReducers } from "./Reducers/SignInReducers";
import { CartReducers } from "./Reducers/CartReducers";
import { thunk } from "redux-thunk";
let rootreducers=combineReducers({
    SignInReducers,
    CartReducers
})
export const store= createStore(rootreducers,applyMiddleware(thunk));