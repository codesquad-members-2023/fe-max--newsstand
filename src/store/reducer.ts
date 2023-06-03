// import { UPDATE_NAME } from "../constants/ActionTypes";
import { GO_NEXT_PAGE, GO_PREV_PAGE, SWITCH_GRID_MODE, SWITCH_LIST_MODE, UPDATE_SUBS } from "../constants/ActionTypes";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case GO_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + 24 };
    case GO_PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1, gridStartPoint: state.gridStartPoint - 24 };
    case SWITCH_GRID_MODE:
      return { ...state, currentViewMode: "grid", currentLastPage: 4 };
    case SWITCH_LIST_MODE:
      return { ...state, currentViewMode: "list", currentLastPage: state.subsPress.length };
    case UPDATE_SUBS:
      return { ...state, subsPress: action.payload };
    default:
      return state;
  }
};
