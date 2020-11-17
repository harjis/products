import { makeAutoObservable } from "mobx";

import { fetchProducts } from "api/products";
import { Loading, Product } from "types";

class Store {
  products: Product[] = [];
  loading: Loading = Loading.NOT_LOADED;

  constructor() {
    makeAutoObservable(this);
  }

  getProducts() {
    this.loading = Loading.LOADING;
    fetchProducts().then((products) => {
      this.loading = Loading.LOADED;
      this.products = products.data;
    });
  }
}

export const ProductStore = new Store();
