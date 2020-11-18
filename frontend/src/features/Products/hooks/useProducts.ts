import React from "react";

import { ProductStore } from "stores/products";
import { Product } from "types";

type ReturnType = {
  products: Product[];
};
export const useProducts = (): ReturnType => {
  const products = ProductStore.allProducts();

  React.useEffect(() => {
    ProductStore.getProducts();
  }, []);

  return {
    products,
  };
};
