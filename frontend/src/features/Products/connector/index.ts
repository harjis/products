import { createSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

import { ProductStore } from "stores/products";
import { AppDispatch } from "stores/types";

const mapStateToProps = createSelector(
  ProductStore.allProducts,
  (products) => ({
    products,
  })
);
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onGetProducts: () => dispatch(ProductStore.getProducts()),
});
export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
