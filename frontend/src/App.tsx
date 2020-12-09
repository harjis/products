import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Products, { ProductForm } from "./features/Products";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Products} />
      <Route path="/products" exact={true} component={Products} />
      <Route path="/products/new" component={ProductForm} />
    </BrowserRouter>
  );
}

export default App;
