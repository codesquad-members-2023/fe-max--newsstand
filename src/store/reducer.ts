import {
  GO_NEXT_PAGE,
  GO_PREV_PAGE,
  SWITCH_GRID_MODE,
  SWITCH_LIST_MODE,
  SWITCH_SUBS_MODE,
  SWITCH_TOTAL_MODE,
  POP_SUBS,
  PUSH_SUBS,
  SET_ARTICLE_INDEX,
  UPDATE_NEWS,
} from "../constants/ActionTypes";
import { GRID_MAX_PAGE, ITEM_PER_GRID, LIST_INIT_MAX_PAGE } from "../constants/constant";
import { Action } from "../dispatcher/dispatcher";
import { State } from "../store/store";

export const reducer = (state: State, action: Action) => {
  const isGridMode = state.currentViewMode === "grid";
  const isTotal = state.currentPressMode === "total";
  const moveNextArt = state.currentPage === state.currentLastPage;
  const movePrevArt = state.currentPage === 1;
  const moveFirstArt = isTotal
    ? state.currentArticleIndex === state.newsData.length - 1
    : state.currentArticleIndex === state.subsPress.length - 1;
  const moveLastArt = state.currentArticleIndex === 0;

  switch (action.type) {
    case GO_NEXT_PAGE: {
      if (isGridMode) {
        return { ...state, currentPage: state.currentPage + 1, gridStartPoint: state.gridStartPoint + ITEM_PER_GRID };
      } else {
        const nextIndex = moveFirstArt ? 0 : state.currentArticleIndex + 1;
        const nextArticleTotal = state.newsData[nextIndex];

        const currentPage = moveNextArt ? 1 : state.currentPage + 1;
        const currentLastPage = moveNextArt ? nextArticleTotal : state.currentLastPage;
        const totalArticleIndex = moveNextArt ? nextIndex : state.currentArticleIndex;
        const subArticleIndex = moveFirstArt ? 0 : state.currentArticleIndex + 1;

        return {
          ...state,
          currentPage: isTotal ? currentPage : 1,
          currentLastPage: isTotal ? currentLastPage : 1,
          currentArticleIndex: isTotal ? totalArticleIndex : subArticleIndex,
        };
      }
    }
    case GO_PREV_PAGE:
      if (isGridMode) {
        return { ...state, currentPage: state.currentPage - 1, gridStartPoint: state.gridStartPoint - ITEM_PER_GRID };
      } else {
        const prevIndex = moveLastArt ? state.newsData.length - 1 : state.currentArticleIndex - 1;
        const prevArticlePages = state.newsData[prevIndex];

        const currentPage = movePrevArt ? prevArticlePages : state.currentPage - 1;
        const currentLastPage = movePrevArt ? prevArticlePages : state.currentLastPage;
        const totalArticleIndex = movePrevArt ? prevIndex : state.currentArticleIndex;
        const subArticleIndex = moveLastArt ? state.subsPress.length - 1 : state.currentArticleIndex - 1;

        return {
          ...state,
          currentPage: isTotal ? currentPage : 1,
          currentLastPage: isTotal ? currentLastPage : 1,
          currentArticleIndex: isTotal ? totalArticleIndex : subArticleIndex,
        };
      }
    case SWITCH_GRID_MODE: {
      const currentLastPage = isTotal ? GRID_MAX_PAGE : Math.ceil(state.subsPress.length / ITEM_PER_GRID);
      return { ...state, currentViewMode: "grid", currentPage: 1, currentLastPage: currentLastPage, gridStartPoint: 0 };
    }
    case SWITCH_LIST_MODE:
      return {
        ...state,
        currentViewMode: "list",
        currentPage: 1,
        currentLastPage: LIST_INIT_MAX_PAGE,
        currentArticleIndex: 0,
      };
    case SWITCH_TOTAL_MODE:
      return {
        ...state,
        currentPressMode: "total",
        currentPage: 1,
        currentLastPage: isGridMode ? GRID_MAX_PAGE : LIST_INIT_MAX_PAGE,
        currentArticleIndex: 0,
      };
    case SWITCH_SUBS_MODE:
      return {
        ...state,
        currentPressMode: "subs",
        currentViewMode: "list",
        currentPage: 1,
        currentLastPage: isGridMode ? Math.ceil(state.subsPress.length / ITEM_PER_GRID) : 1,
        gridStartPoint: 0,
      };
    case UPDATE_NEWS:
      return { ...state, newsData: action.payload };
    case SET_ARTICLE_INDEX:
      return {
        ...state,
        currentArticleIndex: action.payload.index,
        currentPage: 1,
        currentLastPage: action.payload.last,
      };
    case PUSH_SUBS: {
      return { ...state, subsPress: [...state.subsPress, action.payload] };
    }
    case POP_SUBS:
      return { ...state, subsPress: state.subsPress.filter((press: string) => press !== action.payload) };
    default:
      return state;
  }
};
