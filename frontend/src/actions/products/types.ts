import { Product } from "../../types";

type StartLoadingProducts = { type: "PRODUCTS/START_LOADING" };
type ProductsLoaded = { type: "PRODUCTS/LOADED"; products: Product[] };
type ProductsLoadingFailed = {
  type: "PRODUCTS/LOADING_FAILED";
  errorMessage: string;
};
export type ProductActions =
  | StartLoadingProducts
  | ProductsLoaded
  | ProductsLoadingFailed;
