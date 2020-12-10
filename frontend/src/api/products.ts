import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";

import { Product, ProductNew, Errors } from "../types";
import { toCatchable } from "./toCatchable";

export const fetchProducts = (): Observable<AxiosResponse<Product[]>> =>
  from(axios.get("/api/products"));

export const createProduct = (
  product: ProductNew
): Observable<AxiosResponse<Product>> =>
  toCatchable(axios.post("/api/products", { product }));
