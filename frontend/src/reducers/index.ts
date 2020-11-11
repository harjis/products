import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./products";

const rootReducer = combineReducers({ products: productsReducer });

const middleware = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleware));
