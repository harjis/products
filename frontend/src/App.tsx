import React from "react";
import { Provider } from "react-redux";

import { store } from "./stores";
import Products from "./features/Products";

function App() {
  return (
    <Provider store={store}>
      <Products myProp="OwnProps work too" />
    </Provider>
  );
}

export default App;
