// import { UPDATE_NAME } from "../constants/ActionTypes";
import { GO_NEXT_PAGE, GO_PREV_PAGE } from "../constants/ActionTypes";
import { dispatch } from "../dispatcher/dispatcher";

export const actions = {
  goNextPage: () => {
    dispatch({ type: GO_NEXT_PAGE });
  },
  goPrevPage: () => {
    dispatch({ type: GO_PREV_PAGE });
  },
};
