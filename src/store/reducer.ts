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
  SWITCH_LIST_MODE,
  UPDATE_NEWS,
  UPDATE_SUBS,
} from "../constants/ActionTypes";
import { GRID_MAX_PAGE, ITEM_PER_GRID, LIST_INIT_MAX_PAGE } from "../constants/constant";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case GRID_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + ITEM_PER_GRID };
    case GRID_PREV_PAGE:
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
    case LIST_NEXT_PAGE: {
      const mustMoveNext = state.currentPage === state.currentLastPage;
      const mustMoveFirst = state.currentArticleIndex === state.newsData.length - 1;
      const nextIndex = mustMoveFirst ? 0 : state.currentArticleIndex + 1;
      const nextArticleTotal = state.newsData[nextIndex];
      return {
        ...state,
        currentPage: mustMoveNext ? 1 : state.currentPage + 1,

        currentLastPage: mustMoveNext ? nextArticleTotal : state.currentLastPage,
        currentArticleIndex: mustMoveNext ? nextIndex : state.currentArticleIndex,
      };
    }
    case LIST_PREV_PAGE: {
      const mustMovePrev = state.currentPage === 1;
      const mustMoveLast = state.currentArticleIndex === 0;
      const prevIndex = mustMoveLast ? state.newsData.length - 1 : state.currentArticleIndex - 1;
      const prevArticleTotal = state.newsData[prevIndex];
      return {
        ...state,
        currentPage: mustMovePrev ? prevArticleTotal : state.currentPage - 1,
        currentLastPage: mustMovePrev ? prevArticleTotal : state.currentLastPage,
        currentArticleIndex: mustMovePrev ? prevIndex : state.currentArticleIndex,
      };
    }
    case SET_ARTICLE_INDEX:
      return {
        ...state,
        currentArticleIndex: action.payload.index,
        currentPage: 1,
        currentLastPage: action.payload.last,
      };
    case PUSH_SUBS:
      return { ...state, subsPress: [...state.subsPress, action.payload] };
    case POP_SUBS:
      return { ...state, subsPress: [state.subsPress.filter((press: string) => press !== action.payload)] };
    case UPDATE_NEWS:
      return { ...state, newsData: action.payload };
    default:
      return state;
  }
};
