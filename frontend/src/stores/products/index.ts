import { makeAutoObservable } from "mobx";

import { fetchProducts, createProduct } from "api/products";
import { Loading, Product, ProductNew } from "types";

class Store {
  products: Product[] = [];
  loading: Loading = Loading.NOT_LOADED;

  constructor() {
    makeAutoObservable(this);
  }

  getProducts() {
    this.loading = Loading.LOADING;
    fetchProducts().subscribe((products) => {
      this.loading = Loading.LOADED;
      this.products = products.data;
    });
  }

  createProduct(product: ProductNew) {
    return createProduct(product);
  }
}

export const ProductStore = new Store();
