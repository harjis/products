import React from "react";
import { useLocalObservable, useObserver } from "mobx-react-lite";
import { Link, useHistory } from "react-router-dom";

import { Errors, ProductNew } from "../../../types";
import { InputWithLabel } from "../../../components/InputWithLabel";
import { Button } from "../../../components/Button";
import { createProduct } from "../../../api/products";

type Props = {};
export const ProductForm: React.FC<Props> = (props) => {
  const product = useLocalObservable<ProductNew>(() => ({
    id: null,
    name: "",
  }));
  const history = useHistory();
  const onCreate = () => {
    createProduct(product).subscribe(
      () => {
        history.push("/products");
      },
      (error: Errors) => {
        console.log("ERROR", error);
      }
    );
  };
  return useObserver(() => (
    <div>
      <Link to="/products">Back to products</Link>
      <InputWithLabel
        onChange={(event) => {
          product.name = event.currentTarget.value;
        }}
        value={product.name}
        label="Name"
      />
      <Button onClick={onCreate} title="Create" />
    </div>
  ));
};
