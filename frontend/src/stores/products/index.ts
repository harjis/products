import { createSelector } from "reselect";

import { fetchProducts } from "api/products";
import { AppAction, ReduxState } from "../types";

class Store {
  getProducts(): AppAction {
    return (dispatch) => {
      dispatch({ type: "PRODUCTS/START_LOADING" });
      fetchProducts()
        .then((data) =>
          dispatch({ type: "PRODUCTS/LOADED", products: data.data })
        )
        .catch(() => {
          dispatch({
            type: "PRODUCTS/LOADING_FAILED",
            errorMessage: "Loading failed",
          });
        });
    };
  }

  private productsSelector(state: ReduxState) {
    return state.products;
  }

  get allProducts() {
    return createSelector(
      this.productsSelector,
      (productsState) => productsState.products
    );
  }
}

export const ProductStore = new Store();
