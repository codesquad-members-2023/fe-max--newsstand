import { MainViewState } from "@components/mainView";
import { ActionType, Reducer, StateConst } from "./types";

export const reducer: Reducer<MainViewState> = (state, actions) => {
  switch (actions.type) {
    case ActionType.FETCH_PRESS_LIST:
      if (!actions.payload || !actions.payload.logos) {
        return state;
      }

      return {
        ...state,
        gridState: {
          ...state.gridState,
          logos: actions.payload.logos,
        },
      };

    case ActionType.SHUFFLE_PRESS_LIST:
      if (!actions.payload || !actions.payload.fn) {
        return state;
      }

      return {
        ...state,
        gridState: {
          ...state.gridState,
          logos: actions.payload.fn(state.gridState.logos),
        },
      };

    case ActionType.SET_SUBSCRIBED_PRESS_LIST:
      const subscribedPressList = localStorage.getItem("subscribed-press-list");
      const parsedList = subscribedPressList ? JSON.parse(subscribedPressList) : [];

      return {
        ...state,
        gridState: {
          ...state.gridState,
          subscribedPressList: parsedList,
        },
      };

    case ActionType.ALL_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.ALL_PRESS,
      };

    case ActionType.SUBSCRIBED_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.SUBSCRIBE_PRESS,
      };

    default:
      return state;
  }
};
