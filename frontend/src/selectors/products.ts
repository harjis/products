import { createSelector } from "reselect";

import { ReduxState } from "../reducers/types";

const productsSelector = (state: ReduxState) => state.products;

export const allProducts = createSelector(
  productsSelector,
  (productsState) => productsState.products
);
