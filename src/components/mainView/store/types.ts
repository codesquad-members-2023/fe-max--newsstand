import { Press } from "..";

export enum LocalStorageKey {
  SUBSCRIBE_PRESS_LIST = "subscribed-press-list",
}

export enum StateConst {
  ALL_PRESS_TAB = "all-press-tab",
  SUBSCRIBED_PRESS_TAB = "subscribed-press-tab",
  ITEM_PER_PAGE = 24,

  LIST_VIEW = "list-view",
  GRID_VIEW = "grid-view",
}

export enum ActionType {
  SET_PRESS_LIST,
  UPDATE_LAST_PAGE,

  PREV_BUTTON_CLICK,
  NEXT_BUTTON_CLICK,

  SUBSCRIBE_PRESS,
  UNSUBSCRIBE_PRESS,
  ALL_PRESS_TAB_CLICK,
  SUBSCRIBED_PRESS_TAB_CLICK,
}

interface SetPressListAction {
  type: ActionType.SET_PRESS_LIST;
  payload: {
    pressList: Press[];
  };
}

interface PrevButtonClickAction {
  type: ActionType.PREV_BUTTON_CLICK;
}

interface NextButtonClickAction {
  type: ActionType.NEXT_BUTTON_CLICK;
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
  | SetPressListAction
  | PrevButtonClickAction
  | NextButtonClickAction
  | SubscribePressAction
  | UnsubscribePressAction
  | AllPressTabClickAction
  | SubscribedPressTabClickAction;

export type Reducer<T> = (state: T, actions: Action) => T;
