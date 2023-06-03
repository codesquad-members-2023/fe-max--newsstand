// import { UPDATE_NAME } from "../constants/ActionTypes";
import { GO_NEXT_PAGE, GO_PREV_PAGE, SWITCH_GRID_MODE, SWITCH_LIST_MODE, UPDATE_SUBS } from "../constants/ActionTypes";
import { dispatch } from "../dispatcher/dispatcher";

export const actions = {
  goNextPage: () => {
    dispatch({ type: GO_NEXT_PAGE });
  },
  goPrevPage: () => {
    dispatch({ type: GO_PREV_PAGE });
  },
  switchGridMode: () => {
    dispatch({ type: SWITCH_GRID_MODE });
  },
  switchListMode: () => {
    dispatch({ type: SWITCH_LIST_MODE });
  },
  updateSubs: (subs: string[]) => {
    dispatch({ type: UPDATE_SUBS, payload: subs });
  },
};
