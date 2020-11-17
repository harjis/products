import { observable } from "micro-observables";

import { fetchProducts } from "api/products";
import { Loading, Product } from "types";

class Store {
  private _products = observable<readonly Product[]>([]);
  private _loading = observable<Loading>(Loading.NOT_LOADED);

  // The little I read the docs I should be doing .readOnly() here
  // I convert this to mutable array so that I don't need to change
  // all views too. Maybe not the best idea though 🤔
  allProducts = this._products.as<Product[]>();

  getProducts() {
    this._loading.set(Loading.LOADING);
    fetchProducts().then((products) => {
      this._loading.set(Loading.LOADED);
      this._products.set(products.data);
    });
  }
}

export const ProductStore = new Store();
