import { SUBS } from "./SUBS";

export interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<SUBS>;
}
