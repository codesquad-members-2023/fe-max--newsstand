// import { UPDATE_NAME } from "../constants/ActionTypes";
import { GO_NEXT_PAGE, GO_PREV_PAGE } from "../constants/ActionTypes";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case GO_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + 24 };
    case GO_PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1, gridStartPoint: state.gridStartPoint - 24 };
    default:
      return state;
  }
};
