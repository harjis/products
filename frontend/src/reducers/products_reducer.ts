import { Loading, Product } from "../types";
import { Action } from "actions";

export type State = {
  loading: Loading;
  errorMessage: string;
  products: Product[];
};
const initialState: State = {
  loading: Loading.NOT_LOADED,
  errorMessage: "",
  products: [],
};
export const productsReducer = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case "PRODUCTS/START_LOADING":
      return { ...state, loading: Loading.LOADING };
    case "PRODUCTS/LOADED":
      return { ...state, loading: Loading.LOADED, products: action.products };
    case "PRODUCTS/LOADING_FAILED":
      return {
        ...state,
        loading: Loading.LOADED,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
