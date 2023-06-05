// import { UPDATE_NAME } from "../constants/ActionTypes";
import {
  AUTO_NEXT_PAGE,
  GO_NEXT_PAGE,
  GO_PREV_PAGE,
  POP_SUBS,
  PUSH_SUBS,
  RESET_ARTICLE_INDEX,
  SET_ARTICLE_INDEX,
  SET_LIST_LAST_PAGE,
  SWITCH_GRID_MODE,
  SWITCH_LIST_MODE,
  UPDATE_SUBS,
} from "../constants/ActionTypes";
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
  setListLastPage: (totalPress: number) => {
    dispatch({ type: SET_LIST_LAST_PAGE, payload: totalPress });
  },
  autoNextPage: () => {
    dispatch({ type: AUTO_NEXT_PAGE });
  },
  resetArticleIndex: () => {
    dispatch({ type: RESET_ARTICLE_INDEX });
  },
  setArticleIndex: (index: number) => {
    dispatch({ type: SET_ARTICLE_INDEX, payload: index });
  },
  pushSubs: (pressName: string) => {
    dispatch({ type: PUSH_SUBS, payload: pressName });
  },
  popSubs: (pressName: string) => {
    dispatch({ type: POP_SUBS, payload: pressName });
  },
};
