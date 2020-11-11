import { ThunkDispatch } from "redux-thunk";

import { ProductActions } from "../actions/products/types";
import { ProductState } from "./products/types";

export type ReduxState = {
  products: ProductState;
};
export type AppAction = ProductActions;
export type AppDispatch = ThunkDispatch<ReduxState, null, AppAction>;
