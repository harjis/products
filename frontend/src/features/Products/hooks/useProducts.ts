import React from "react";
import { useObservable } from "micro-observables";

import { ProductStore } from "stores/products";
import { Product } from "types";

type ReturnType = {
  products: Product[];
};
export const useProducts = (): ReturnType => {
  const products = useObservable(ProductStore.allProducts);

  React.useEffect(() => {
    ProductStore.getProducts();
  }, []);

  return {
    products,
  };
};
