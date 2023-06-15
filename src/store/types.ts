import { Action } from "@components/mainView/store/types";

export interface Store<T> {
  dispatch(action: Action): void;
  subscribe(subscriber: (state: T) => void): void;
  getState(): T;
}
