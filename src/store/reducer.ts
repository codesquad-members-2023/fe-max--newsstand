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
import { GRID_MAX_PAGE, ITEM_PER_GRID, LIST_INIT_MAX_PAGE } from "../constants/constant";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case GO_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + ITEM_PER_GRID };
    case GO_PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1, gridStartPoint: state.gridStartPoint - ITEM_PER_GRID };
    case SWITCH_GRID_MODE:
      return { ...state, currentViewMode: "grid", currentPage: 1, currentLastPage: GRID_MAX_PAGE, gridStartPoint: 0 };
    case SWITCH_LIST_MODE:
      return {
        ...state,
        currentViewMode: "list",
        currentPage: 1,
        currentLastPage: LIST_INIT_MAX_PAGE,
        currentArticleIndex: 0,
      };
    case UPDATE_SUBS:
      return { ...state, subsPress: action.payload };
    case SET_LIST_LAST_PAGE:
      return { ...state, currentLastPage: action.payload };
    case AUTO_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case RESET_ARTICLE_INDEX:
      return { ...state, currentArticleIndex: 0 };
    case SET_ARTICLE_INDEX:
      return { ...state, currentArticleIndex: action.payload, currentPage: 1 };
    case PUSH_SUBS:
      return { ...state, subsPress: [...state.subsPress, action.payload] };
    case POP_SUBS:
      return { ...state, subsPress: [state.subsPress.filter((press: string) => press !== action.payload)] };
    default:
      return state;
  }
};
