import React from "react";

import { List } from "components/List";
import { useProducts } from "../hooks/useProducts";

type Props = {
  myProp: string;
};
const Products = (props: React.PropsWithChildren<Props>) => {
  const { products } = useProducts();

  return <List items={products} labelKey="name" />;
};

export default Products;
