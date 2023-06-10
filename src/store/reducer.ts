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
import { FIRST_PAGE, GRID_MAX_PAGE, ITEM_PER_GRID, LIST_INIT_MAX_PAGE } from "../constants/constant";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case GRID_NEXT_PAGE: {
      return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + ITEM_PER_GRID };
    }
    case GRID_PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1, gridStartPoint: state.gridStartPoint - ITEM_PER_GRID };
    case SWITCH_GRID_MODE: {
      const isTotal = state.currentPressMode === "total";
      const gridCount = Math.ceil(state.subsPress.length / ITEM_PER_GRID);

      return {
        ...state,
        currentViewMode: "grid",
        currentPage: 1,
        currentLastPage: isTotal ? GRID_MAX_PAGE : gridCount,
        gridStartPoint: 0,
      };
    }
    case SWITCH_LIST_MODE:
      return {
        ...state,
        currentViewMode: "list",
        currentPage: FIRST_PAGE,
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
      const isTotal = state.currentPressMode === "total";

      const mustMoveNext = state.currentPage === state.currentLastPage;
      const mustMoveFirst = isTotal
        ? state.currentArticleIndex === state.newsData.length - 1
        : state.currentArticleIndex === state.subsPress.length - 1;
      const nextIndex = mustMoveFirst ? 0 : state.currentArticleIndex + 1;
      const nextArticleTotal = state.newsData[nextIndex];

      const totalCurPage = mustMoveNext ? FIRST_PAGE : state.currentPage + 1;
      const totalLastPage = mustMoveNext ? nextArticleTotal : state.currentLastPage;
      const totalArticleIdx = mustMoveNext ? nextIndex : state.currentArticleIndex;
      const subsArticleIdx = mustMoveFirst ? 0 : state.currentArticleIndex + 1;

      return {
        ...state,
        currentPage: isTotal ? totalCurPage : 1,
        currentLastPage: isTotal ? totalLastPage : 1,
        currentArticleIndex: isTotal ? totalArticleIdx : subsArticleIdx,
      };
    }
    case LIST_PREV_PAGE: {
      const isTotal = state.currentPressMode === "total";

      const mustMovePrev = state.currentPage === FIRST_PAGE;
      const mustMoveLast = state.currentArticleIndex === 0;
      const prevIndex = mustMoveLast ? state.newsData.length - 1 : state.currentArticleIndex - 1;
      const prevArticleTotal = state.newsData[prevIndex];
      const totalCurPage = mustMovePrev ? prevArticleTotal : state.currentPage - 1;
      const totalLastPage = mustMovePrev ? prevArticleTotal : state.currentLastPage;
      const totalArticleIdx = mustMovePrev ? prevIndex : state.currentArticleIndex;
      const subArticleIdx = mustMoveLast ? state.subsPress.length - 1 : state.currentArticleIndex - 1;
      return {
        ...state,
        currentPage: isTotal ? totalCurPage : 1,
        currentLastPage: isTotal ? totalLastPage : 1,
        currentArticleIndex: isTotal ? totalArticleIdx : subArticleIdx,
      };
    }
    case SET_ARTICLE_INDEX:
      return {
        ...state,
        currentArticleIndex: action.payload.index,
        currentPage: FIRST_PAGE,
        currentLastPage: action.payload.last,
      };
    case PUSH_SUBS: {
      const isGrid = state.currentViewMode === "grid";
      const newMode = isGrid ? "total" : "subs";
      return { ...state, subsPress: [...state.subsPress, action.payload] };
      // return { ...state, subsPress: [...state.subsPress, action.payload], currentPressMode: newMode };
    }
    case POP_SUBS:
      return { ...state, subsPress: state.subsPress.filter((press: string) => press !== action.payload) };
    case UPDATE_NEWS:
      return { ...state, newsData: action.payload };
    case SWITCH_GRID_TOTAL:
      return { ...state, currentPressMode: "total", currentPage: 1, currentLastPage: GRID_MAX_PAGE };
    case SWITCH_GRID_SUBS:
      return { ...state, currentPressMode: "subs", currentViewMode: "list" };
    case SWITCH_LIST_TOTAL:
      return { ...state, currentPressMode: "total", currentArticleIndex: 0, currentLastPage: LIST_INIT_MAX_PAGE };
    case SWITCH_LIST_SUBS:
      return { ...state, currentPressMode: "subs", currentLastPage: 1, currentArticleIndex: 0, pressLastIndex: 1 };
    default:
      return state;
  }
};
