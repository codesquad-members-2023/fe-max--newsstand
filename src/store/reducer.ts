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

    case ActionType.UPDATE_LAST_PAGE:
      return {
        ...state,
        gridState: {
          ...state.gridState,
          lastPage: Math.ceil(state.gridState.pressList.length / StateConst.ITEM_PER_PAGE),
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
      return {
        ...state,
        gridState: {
          ...state.gridState,
          ...actions.payload,
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

    default:
      return state;
  }
};
