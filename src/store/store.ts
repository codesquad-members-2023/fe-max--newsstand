import { GRID_MAX_PAGE } from "../constants/constant";

export type State = {
  currentPage: number;
  currentLastPage: number;
  currentViewMode: string;
  currentPressMode: string;

  gridStartPoint: number;

  subsPress: string[];
  newsData: [];
  currentArticleIndex: number;

  [key: string]: number | string | string[];
};

type Listener = () => void;

let state: State = {
  currentPage: 1,
  currentLastPage: GRID_MAX_PAGE,
  currentViewMode: "grid",
  currentPressMode: "total",

  gridStartPoint: 0,

  subsPress: [],
  newsData: [],
  currentArticleIndex: 0,
};

const listeners: Set<Listener> = new Set();

export function subscribe(callback: Listener) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function setState(newState: any) {
  state = { ...state, ...newState };
  for (const callback of listeners) {
    callback();
  }
}

export function getState(): State {
  return { ...state };
}
