import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";

import { productsReducer, State as ProductsState } from "./products_reducer";
import { Action } from "../actions";

export type ReduxState = {
  products: ProductsState;
};
export type AppDispatch = ThunkDispatch<ReduxState, null, Action>;
const rootReducer = combineReducers({ products: productsReducer });

const middleware = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middleware));
