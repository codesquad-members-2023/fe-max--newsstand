import { Press } from "@components/mainView";

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
  FETCH_PRESS_LIST,
  SHUFFLE_PRESS_LIST,
  UPDATE_LAST_PAGE,

  PREV_BUTTON_CLICK,
  NEXT_BUTTON_CLICK,

  SET_SUBSCRIBED_PRESS_LIST,
  SUBSCRIBE_PRESS,
  UNSUBSCRIBE_PRESS,
  ALL_PRESS_TAB_CLICK,
  SUBSCRIBED_PRESS_TAB_CLICK,
}

interface FetchPressListAction {
  type: ActionType.FETCH_PRESS_LIST;
  payload: {
    pressList: Press[];
  };
}

interface ShufflePressListAction {
  type: ActionType.SHUFFLE_PRESS_LIST;
  payload: {
    fn: (pressList: Press[]) => Press[];
  };
}

interface UpdateLastPageAction {
  type: ActionType.UPDATE_LAST_PAGE;
}

interface PrevButtonClickAction {
  type: ActionType.PREV_BUTTON_CLICK;
}

interface NextButtonClickAction {
  type: ActionType.NEXT_BUTTON_CLICK;
}

interface SetSubscribePressListAction {
  type: ActionType.SET_SUBSCRIBED_PRESS_LIST;
}

interface SubscribePressAction {
  type: ActionType.SUBSCRIBE_PRESS | ActionType.UNSUBSCRIBE_PRESS;
  payload: {
    pressName: string;
  };
}

interface UnsubscribePressAction {
  type: ActionType.UNSUBSCRIBE_PRESS;
  payload: {
    pressName: string;
  };
}

interface AllPressTabClickAction {
  type: ActionType.ALL_PRESS_TAB_CLICK;
}

interface SubscribedPressTabClickAction {
  type: ActionType.SUBSCRIBED_PRESS_TAB_CLICK;
}

export type Action =
  | FetchPressListAction
  | ShufflePressListAction
  | UpdateLastPageAction
  | PrevButtonClickAction
  | NextButtonClickAction
  | SetSubscribePressListAction
  | SubscribePressAction
  | UnsubscribePressAction
  | AllPressTabClickAction
  | SubscribedPressTabClickAction;

export type Reducer<T> = (state: T, actions: Action) => T;
