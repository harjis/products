import React from "react";
import { observer } from "mobx-react";

import { List } from "components/List";
import { ProductStore } from "../../../stores/products";

type Props = {
  myProp: string;
};
export default observer((props: React.PropsWithChildren<Props>) => {
  React.useEffect(() => {
    ProductStore.getProducts();
  }, []);

  return <List items={ProductStore.products} labelKey="name" />;
});
