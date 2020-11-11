import { fetchProducts } from "api/products";
import { AppDispatch } from "../../reducers/types";

export const getProducts = () => (dispatch: AppDispatch) => {
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
