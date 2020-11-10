import axios, { AxiosResponse } from "axios";

import { Product } from "../types";

export const fetchProducts = (): Promise<AxiosResponse<Product[]>> =>
  axios.get("/api/products");
