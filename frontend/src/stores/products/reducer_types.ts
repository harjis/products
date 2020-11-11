import { Loading, Product } from "../../types";

export type ProductState = {
  loading: Loading;
  errorMessage: string;
  products: Product[];
};
