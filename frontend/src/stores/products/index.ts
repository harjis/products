import { createSelector } from "reselect";
import { store } from "../index";

import { fetchProducts } from "api/products";
import { ReduxState } from "../types";

class Store {
  getProducts(): void {
    const { dispatch } = store;
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
  }

  private productsSelector(state: ReduxState) {
    return state.products;
  }

  allProducts() {
    return createSelector(
      this.productsSelector,
      (productsState) => productsState.products
    )(store.getState());
  }
}

export const ProductStore = new Store();
