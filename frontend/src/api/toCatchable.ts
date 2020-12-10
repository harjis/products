import { AxiosError } from "axios";
import { from } from "rxjs";
import { catchError } from "rxjs/operators";
import { Errors } from "../types";

export const toCatchable = <Payload>(promise: Promise<Payload>) => {
  return from(promise).pipe(
    catchError((error: AxiosError<Errors>) => {
      throw error.response?.data;
    })
  );
};
