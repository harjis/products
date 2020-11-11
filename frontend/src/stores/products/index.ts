import { createSelector } from "reselect";

import { fetchProducts } from "api/products";
import { AppAction, ReduxState } from "../types";

type GetProducts = () => AppAction;
export const getProducts: GetProducts = () => (dispatch) => {
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

const productsSelector = (state: ReduxState) => state.products;

export const allProducts = createSelector(
  productsSelector,
  (productsState) => productsState.products
);
