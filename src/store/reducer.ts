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

    case ActionType.UPDATE_LAST_PAGE:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          lastPage: Math.ceil(state.gridState.logos.length / StateConst.ITEM_PER_PAGE),
        },
      };

    case ActionType.PREV_BUTTON_CLICK:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          currentPage:
            state.gridState.currentPage > 1
              ? state.gridState.currentPage - 1
              : state.gridState.currentPage,
        },
      };

    case ActionType.NEXT_BUTTON_CLICK:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          currentPage:
            state.gridState.currentPage < state.gridState.lastPage
              ? state.gridState.currentPage + 1
              : state.gridState.currentPage,
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

    case ActionType.SUBSCRIBE_PRESS:
      if (!actions.payload) {
        return state;
      }

      return {
        ...state,
        gridState: {
          ...state.gridState,
          subscribedPressList: [
            ...new Set([...state.gridState.subscribedPressList, actions.payload.pressName]),
          ],
        },
      };

    case ActionType.ALL_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.ALL_PRESS,
        gridState: {
          ...state.gridState,
          currentPage: 1,
        },
      };

    case ActionType.SUBSCRIBED_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.SUBSCRIBE_PRESS,
        gridState: {
          ...state.gridState,
          currentPage: 1,
        },
      };

    default:
      return state;
  }
};
