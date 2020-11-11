import { Loading } from "types";
import { ProductState } from "./reducer_types";
import { AllActions } from "../types";

const initialState: ProductState = {
  loading: Loading.NOT_LOADED,
  errorMessage: "",
  products: [],
};
export const productsReducer = (
  state: ProductState = initialState,
  action: AllActions
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
