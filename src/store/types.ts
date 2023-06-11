import { PressLogo } from "@components/mainView";

export interface Store<T> {
  dispatch(action: Action): void;
  subscribe(subscriber: (state: T) => void): void;
  getState(): T;
}

export enum StateConst {
  ALL_PRESS = "all-press",
  SUBSCRIBE_PRESS = "subscribed-press",
}

export enum ActionType {
  FETCH_PRESS_LIST = "FETCH_PRESS_LIST",
  SHUFFLE_PRESS_LIST = "SHUFFLE_PRESS_LIST",
  SET_SUBSCRIBED_PRESS_LIST = "SET_SUBSCRIBED_PRESS_LIST",
  ALL_PRESS_TAB_CLICK = "ALL_PRESS_TAB_CLICK",
  SUBSCRIBED_PRESS_TAB_CLICK = "SUBSCRIBED_PRESS_TAB_CLICK",
}

export interface Action {
  type: ActionType;
  payload?: {
    logos?: PressLogo[];
    fn?: Function;
  };
}

export type Reducer<T> = (state: T, actions: Action) => T;
