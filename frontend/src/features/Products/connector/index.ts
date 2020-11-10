import { createSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

import { getProductsSelector } from "../../../selectors/products";
import { AppDispatch } from "../../../reducers";
import { getProducts } from "../../../actions";

const mapStateToProps = createSelector(getProductsSelector, (products) => ({
  products,
}));
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onGetProducts: () => dispatch(getProducts()),
});
export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
