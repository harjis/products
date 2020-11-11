import { createSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

import { allProducts } from "selectors/products";
import { AppDispatch } from "reducers/types";
import { getProducts } from "actions/products";

const mapStateToProps = createSelector(allProducts, (products) => ({
  products,
}));
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onGetProducts: () => dispatch(getProducts()),
});
export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
