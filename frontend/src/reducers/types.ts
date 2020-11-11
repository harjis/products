import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { ProductActions } from "../actions/products/types";
import { ProductState } from "./products/types";

export type ReduxState = {
  products: ProductState;
};
export type AllActions = ProductActions;
export type AppAction = ThunkAction<void, ReduxState, null, AllActions>;
export type AppDispatch = ThunkDispatch<ReduxState, null, AllActions>;
