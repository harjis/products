import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../../../types";
import { InputWithLabel } from "../../../components/InputWithLabel";
import { Button } from "../../../components/Button";

type Props = {
  product: Product;
};
export const ProductForm: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to="/products">Back to products</Link>
      <InputWithLabel onChange={() => {}} value={"test"} label="Name" />
      <Button onClick={() => {}} title="Create" />
    </div>
  );
};
