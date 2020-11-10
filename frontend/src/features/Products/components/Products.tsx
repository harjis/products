import React from "react";

import { connector, PropsFromRedux } from "../connector";
import { List } from "components/List";

type Props = PropsFromRedux & {
  myProp: string;
};
const Products = (props: React.PropsWithChildren<Props>) => {
  const { onGetProducts } = props;
  React.useEffect(() => {
    onGetProducts();
  }, [onGetProducts]);

  return <List items={props.products} labelKey="name" />;
};

export default connector(Products);
