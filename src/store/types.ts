import { PressLogo } from "@components/mainView";

export interface Store<T> {
  dispatch(action: Action): void;
  subscribe(subscriber: (state: T) => void): void;
  getState(): T;
}

export enum LocalStorageKey {
  SUBSCRIBE_PRESS_LIST = "subscribed-press-list",
}

export enum StateConst {
  ALL_PRESS = "all-press",
  SUBSCRIBE_PRESS = "subscribed-press",
  ITEM_PER_PAGE = 24,
}

export enum ActionType {
  FETCH_PRESS_LOGOS,
  SHUFFLE_PRESS_LIST,
  UPDATE_LAST_PAGE,

  PREV_BUTTON_CLICK,
  NEXT_BUTTON_CLICK,

  SET_SUBSCRIBED_PRESS_LIST,
  SUBSCRIBE_PRESS,
  ALL_PRESS_TAB_CLICK,
  SUBSCRIBED_PRESS_TAB_CLICK,
}

export interface Action {
  type: ActionType;
  payload?: {
    logos?: PressLogo[];
    pressName?: string;
    fn?: Function;
  };
}

export type Reducer<T> = (state: T, actions: Action) => T;
