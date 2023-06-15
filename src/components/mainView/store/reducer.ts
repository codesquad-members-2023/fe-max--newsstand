import { MainViewState } from "@components/mainView";
import { ActionType, Reducer, StateConst } from "./types";

export const reducer: Reducer<MainViewState> = (state, actions) => {
  switch (actions.type) {
    case ActionType.SET_PRESS_LIST:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          ...actions.payload,
        },
      };

    case ActionType.PREV_BUTTON_CLICK:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          currentPage: state.gridState.currentPage - 1,
        },
      };

    case ActionType.NEXT_BUTTON_CLICK:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          currentPage: state.gridState.currentPage + 1,
        },
      };

    case ActionType.SUBSCRIBE_PRESS:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          subscribedPressList: [
            ...new Set([...state.gridState.subscribedPressList, actions.payload.pressName]),
          ],
        },
      };

    case ActionType.UNSUBSCRIBE_PRESS:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          subscribedPressList: state.gridState.subscribedPressList.filter(
            (press) => press !== actions.payload!.pressName
          ),
        },
      };

    case ActionType.ALL_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.ALL_PRESS_TAB,
        gridState: {
          ...state.gridState,
          currentPage: 1,
        },
      };

    case ActionType.SUBSCRIBED_PRESS_TAB_CLICK:
      return {
        ...state,
        currentTab: StateConst.SUBSCRIBED_PRESS_TAB,
        gridState: {
          ...state.gridState,
          currentPage: 1,
        },
      };

    case ActionType.LIST_VIEW_CLICK:
      return {
        ...state,
        currentView: StateConst.LIST_VIEW,
      };

    case ActionType.GRID_VIEW_CLICK:
      return {
        ...state,
        currentView: StateConst.GRID_VIEW,
      };

    default:
      return state;
  }
};
