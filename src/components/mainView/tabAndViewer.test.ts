/** @jest-environment jsdom */

import { createStore } from "@store/store";
import { MainViewState } from ".";
import { StateConst } from "./store/types";
import { reducer } from "./store/reducer";
import { MainView } from "./mainView";

window.alert = jest.fn();

describe("탭을 클릭했을 경우 상태를 변경시켜야 한다.", () => {
  it("전체 언론사를 클릭했을 경우 currentTab의 상태를 전체 언론사로 변경해야 한다. 클래스명에 전체 언론사에 --selected라는 modifier가 붙는다.", () => {
    const initialState: MainViewState = {
      currentTab: StateConst.SUBSCRIBED_PRESS_TAB,
      currentView: StateConst.LIST_VIEW,

      gridState: {
        pressList: [],
        subscribedPressList: [],
        currentPage: 1,
      },
    };
    const store = createStore<MainViewState>(initialState, reducer);
    const mainView = new MainView(store);

    mainView.tabAndViewer.$allPressTab.click();
    expect(store.getState().currentTab).toBe(StateConst.ALL_PRESS_TAB);
    expect(mainView.tabAndViewer.$allPressTab.className).toBe(
      "tab-and-viewer__all-press-tab--selected"
    );
  });

  it("내가 구독한 언론사를 클릭했을 경우 currentTab의 상태를 내가 구독한 언론사로 변경해야 한다. 클래스명에 내가 구독한 언론사에 --selected라는 modifier가 붙는다.", () => {
    const initialState: MainViewState = {
      currentTab: StateConst.ALL_PRESS_TAB,
      currentView: StateConst.LIST_VIEW,

      gridState: {
        pressList: [],
        subscribedPressList: [],
        currentPage: 1,
      },
    };
    const store = createStore<MainViewState>(initialState, reducer);
    const mainView = new MainView(store);

    mainView.tabAndViewer.$subscribedPressTab.click();
    expect(store.getState().currentTab).toBe(StateConst.SUBSCRIBED_PRESS_TAB);
    expect(mainView.tabAndViewer.$subscribedPressTab.className).toBe(
      "tab-and-viewer__subscribed-press-tab--selected"
    );
  });
});

describe("viewButton을 클릭했을 경우 상태를 변경시켜야 한다.", () => {
  it("list-view를 클릭했을 경우 currentView의 상태를 list-view로 변경해야 한다. 클래스명에 --selected라는 modifier가 붙는다.", () => {
    const initialState: MainViewState = {
      currentTab: StateConst.SUBSCRIBED_PRESS_TAB,
      currentView: StateConst.GRID_VIEW,

      gridState: {
        pressList: [],
        subscribedPressList: [],
        currentPage: 1,
      },
    };
    const store = createStore<MainViewState>(initialState, reducer);
    const mainView = new MainView(store);

    mainView.tabAndViewer.$listViewButton.click();
    expect(store.getState().currentView).toBe(StateConst.LIST_VIEW);
    expect(mainView.tabAndViewer.$listViewButton.className).toBe(
      "tab-and-viewer__list-view-button--selected"
    );
  });

  it("grid-view를 클릭했을 경우 currentView의 상태를 grid-view로 변경해야 한다. 클래스명에 --selected라는 modifier가 붙는다.", () => {
    const initialState: MainViewState = {
      currentTab: StateConst.ALL_PRESS_TAB,
      currentView: StateConst.LIST_VIEW,

      gridState: {
        pressList: [],
        subscribedPressList: [],
        currentPage: 1,
      },
    };
    const store = createStore<MainViewState>(initialState, reducer);
    const mainView = new MainView(store);

    mainView.tabAndViewer.$gridViewButton.click();
    expect(store.getState().currentView).toBe(StateConst.GRID_VIEW);
    expect(mainView.tabAndViewer.$gridViewButton.className).toBe(
      "tab-and-viewer__grid-view-button--selected"
    );
  });
});
