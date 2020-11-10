import { Dispatch } from "redux";
import { Product } from "../types";
import { fetchProducts } from "../api/products";

type StartLoadingProducts = { type: "PRODUCTS/START_LOADING" };
type ProductsLoaded = { type: "PRODUCTS/LOADED"; products: Product[] };
type ProductsLoadingFailed = {
  type: "PRODUCTS/LOADING_FAILED";
  errorMessage: string;
};
export const getProducts = () => (dispatch: Dispatch) => {
  dispatch({ type: "PRODUCTS/START_LOADING" });
  fetchProducts()
    .then((data) => dispatch({ type: "PRODUCTS/LOADED", products: data.data }))
    .catch(() => {
      dispatch({
        type: "PRODUCTS/LOADING_FAILED",
        errorMessage: "Loading failed",
      });
    });
};

export type ProductActions =
  | StartLoadingProducts
  | ProductsLoaded
  | ProductsLoadingFailed;
