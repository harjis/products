import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import { List } from "components/List";
import { ProductStore } from "../../../stores/products";

export default observer(() => {
  React.useEffect(() => {
    ProductStore.getProducts();
  }, []);

  return (
    <div>
      <Link to="/products/new">New product</Link>
      <List items={ProductStore.products} labelKey="name" />
    </div>
  );
});
