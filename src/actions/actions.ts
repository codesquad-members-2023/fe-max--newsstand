// import { UPDATE_NAME } from "../constants/ActionTypes";
import {
  AUTO_NEXT_PAGE,
  GRID_NEXT_PAGE,
  GRID_PREV_PAGE,
  LIST_NEXT_PAGE,
  LIST_PREV_PAGE,
  POP_SUBS,
  PUSH_SUBS,
  SET_ARTICLE_INDEX,
  SET_LIST_LAST_PAGE,
  SWITCH_GRID_MODE,
  SWITCH_GRID_SUBS,
  SWITCH_GRID_TOTAL,
  SWITCH_LIST_MODE,
  SWITCH_LIST_SUBS,
  SWITCH_LIST_TOTAL,
  UPDATE_NEWS,
  UPDATE_SUBS,
} from "../constants/ActionTypes";
import { dispatch } from "../dispatcher/dispatcher";

export const actions = {
  gridNextPage: () => {
    dispatch({ type: GRID_NEXT_PAGE });
  },
  gridPrevPage: () => {
    dispatch({ type: GRID_PREV_PAGE });
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
  listNextPage: (payloads?: object) => {
    dispatch({ type: LIST_NEXT_PAGE, payload: payloads });
  },
  listPrevPage: (payloads?: object) => {
    dispatch({ type: LIST_PREV_PAGE, payload: payloads });
  },
  setArticleIndex: (index: object) => {
    dispatch({ type: SET_ARTICLE_INDEX, payload: index });
  },
  pushSubs: (pressName: string) => {
    dispatch({ type: PUSH_SUBS, payload: pressName });
  },
  popSubs: (pressName: string) => {
    dispatch({ type: POP_SUBS, payload: pressName });
  },
  updateNews: (data: object) => {
    dispatch({ type: UPDATE_NEWS, payload: data });
  },
  switchGridTotal: () => {
    dispatch({ type: SWITCH_GRID_TOTAL });
  },
  switchGridSubs: () => {
    dispatch({ type: SWITCH_GRID_SUBS });
  },
  switchListTotal: () => {
    dispatch({type: SWITCH_LIST_TOTAL})
  },
  switchListSubs: () => {
    dispatch({ type: SWITCH_LIST_SUBS });
  },
};
