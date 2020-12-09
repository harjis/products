import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";

import { Product } from "../types";

export const fetchProducts = (): Observable<AxiosResponse<Product[]>> =>
  from(axios.get("/api/products"));
