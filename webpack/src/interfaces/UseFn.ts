import { Dispose } from "./Dispose";

export interface UseFn {
  (): Dispose | void;
}
