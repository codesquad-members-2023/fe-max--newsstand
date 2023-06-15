import { $ } from "@utils/domUtils";
import { MainView } from "./mainView";
import { createStore } from "@store/store";
import { reducer } from "@store/reducer";
import { LocalStorageKey, StateConst } from "@store/types";

export interface Press {
  src: string;
  alt: string;
}

export interface MainViewState {
  currentTab: StateConst.ALL_PRESS_TAB | StateConst.SUBSCRIBED_PRESS_TAB;
  currentView: StateConst.LIST_VIEW | StateConst.GRID_VIEW;

  gridState: {
    pressList: Press[];
    subscribedPressList: string[];
    currentPage: number;
    lastPage: number;
  };
}

const initialState: MainViewState = (() => {
  const subscribedPressList = localStorage.getItem(LocalStorageKey.SUBSCRIBE_PRESS_LIST);
  const parsedList: string[] = subscribedPressList ? JSON.parse(subscribedPressList) : [];

  return {
    currentTab: StateConst.ALL_PRESS_TAB,
    currentView: StateConst.GRID_VIEW,

    gridState: {
      pressList: [],
      subscribedPressList: parsedList,
      currentPage: 1,
      lastPage: 1,
    },
  };
})();

export const initMainView = async () => {
  const store = createStore<MainViewState>(initialState, reducer);
  const mainView = new MainView(store);

  const $app = $("#app");
  $app.append(mainView.$mainView);
};
