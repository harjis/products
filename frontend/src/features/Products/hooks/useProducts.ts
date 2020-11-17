import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductStore } from "stores/products";
import { Product } from "types";

type ReturnType = {
  products: Product[];
};
export const useProducts = (): ReturnType => {
  const products = useSelector(ProductStore.allProducts);
  const dispatch = useDispatch();
  const onGetProducts = React.useCallback(() => {
    dispatch(ProductStore.getProducts());
  }, []);

  React.useEffect(() => {
    onGetProducts();
  }, [onGetProducts]);

  return {
    products,
  };
};
