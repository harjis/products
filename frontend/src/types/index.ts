import { Product, ProductNew } from "./products";

export type { Product, ProductNew };

export enum Loading {
  NOT_LOADED,
  LOADING,
  LOADED,
}

export type Errors = {
  errors: { [column: string]: string[] };
};
