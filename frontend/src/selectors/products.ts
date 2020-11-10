import { createSelector } from "reselect";

import { ReduxState } from "../reducers";

const productsSelector = (state: ReduxState) => state.products;

export const getProductsSelector = createSelector(
  productsSelector,
  (productsState) => productsState.products
);
