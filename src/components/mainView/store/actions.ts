import { MainViewState, Press } from "@components/mainView";
import { ActionType, StateConst } from "./types";
import { Store } from "@store/types";

export const subscribePress = (store: Store<MainViewState>, pressName: string) => {
  store.dispatch({
    type: ActionType.SUBSCRIBE_PRESS,
    payload: {
      pressName,
    },
  });
};

export const unsubscribePress = (store: Store<MainViewState>, pressName: string) => {
  store.dispatch({
    type: ActionType.UNSUBSCRIBE_PRESS,
    payload: {
      pressName,
    },
  });
};

export const handlePrevButtonClick = (store: Store<MainViewState>) => {
  store.dispatch({ type: ActionType.PREV_BUTTON_CLICK });
};

export const handleNextButtonClick = (store: Store<MainViewState>) => {
  store.dispatch({ type: ActionType.NEXT_BUTTON_CLICK });
};

export const changeCurrentTabState = (
  store: Store<MainViewState>,
  targetTab: StateConst.ALL_PRESS_TAB | StateConst.SUBSCRIBED_PRESS_TAB
) => {
  if (targetTab === StateConst.ALL_PRESS_TAB) {
    store.dispatch({ type: ActionType.ALL_PRESS_TAB_CLICK });

    return;
  }

  store.dispatch({ type: ActionType.SUBSCRIBED_PRESS_TAB_CLICK });
};

export const changeCurrentViewState = (
  store: Store<MainViewState>,
  targetTab: StateConst.LIST_VIEW | StateConst.GRID_VIEW
) => {
  if (targetTab === StateConst.LIST_VIEW) {
    store.dispatch({ type: ActionType.LIST_VIEW_CLICK });

    return;
  }

  store.dispatch({ type: ActionType.GRID_VIEW_CLICK });
};

export const setPressList = (store: Store<MainViewState>, pressList: Press[]) => {
  store.dispatch({
    type: ActionType.SET_PRESS_LIST,
    payload: {
      pressList,
    },
  });
};
