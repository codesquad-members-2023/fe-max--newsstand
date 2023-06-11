import { $ } from "@utils/domUtils";
import { MainView } from "./mainView";
import { createStore } from "@store/store";
import { reducer } from "@store/reducer";
import { StateConst } from "@store/types";

export interface PressLogo {
  src: string;
  alt: string;
}

export interface MainViewState {
  currentTab: StateConst.ALL_PRESS | StateConst.SUBSCRIBE_PRESS;

  gridState: {
    logos: PressLogo[];
    subscribedPressList: string[];
    currentPage: number;
    lastPage: number;
  };
}

const initialState: MainViewState = {
  currentTab: StateConst.ALL_PRESS,

  gridState: {
    logos: [],
    subscribedPressList: [],
    currentPage: 1,
    lastPage: 1,
  },
};

export const initMainView = async () => {
  const store = createStore<MainViewState>(initialState, reducer);
  const mainView = new MainView(store);

  const $app = $("#app");
  $app.append(mainView.$mainView);
};
