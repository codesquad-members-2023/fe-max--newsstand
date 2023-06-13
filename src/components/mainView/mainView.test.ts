/** @jest-environment jsdom */
import { StateConst } from "@store/types";
import { MainView } from "./mainView";
import { MainViewState } from ".";
import { createStore } from "@store/store";
import { reducer } from "@store/reducer";

window.alert = jest.fn();

describe("MainView updateArrowVisibility method tests", () => {
  describe("currentView가 list-view인 경우, 항상 양쪽 화살표가 보여야 한다.", () => {
    it("항상 양쪽 화살표가 보인다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.ALL_PRESS,
        currentView: StateConst.LIST_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: [],
          currentPage: 1,
          lastPage: 1,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow");
    });
  });

  describe("currentView가 grid-view이며 currentTab이 ALL_PRESS의 경우, 경우에 따라 화살표가 보이거나 사라진다.", () => {
    it("첫 페이지이며 마지막 페이지인 경우, 양쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.ALL_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: [],
          currentPage: 1,
          lastPage: 1,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow--hidden");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow--hidden");
    });

    it("첫 페이지이며 마지막 페이지가 아닌 경우, 왼쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.ALL_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: [],
          currentPage: 1,
          lastPage: 3,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow--hidden");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow");
    });

    it("첫 페이지가 아니며 마지막 페이지인 경우, 오른쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.ALL_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: [],
          currentPage: 3,
          lastPage: 3,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow--hidden");
    });

    it("첫 페이지도 마지막 페이지도 아닌 경우, 양쪽 화살표 모두 사라지지 않는다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.ALL_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: [],
          currentPage: 2,
          lastPage: 3,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow");
    });
  });

  describe("currentView가 grid-view이며 currentTab이 SUBSCRIBED_PRESS의 경우, 경우에 따라 화살표가 보이거나 사라진다.", () => {
    it("첫 페이지이며 마지막 페이지인 경우, 양쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.SUBSCRIBED_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: Array.from({ length: 1 }, () => ""),
          currentPage: 1,
          lastPage: 1,
        },
      };

      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow--hidden");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow--hidden");
    });

    it("첫 페이지이며 마지막 페이지가 아닌 경우, 왼쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.SUBSCRIBED_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: Array.from({ length: StateConst.ITEM_PER_PAGE + 1 }, () => ""),
          currentPage: 1,
          lastPage: 1,
        },
      };

      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow--hidden");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow");
    });

    it("첫 페이지가 아니며 마지막 페이지인 경우, 오른쪽 화살표가 사라져야 한다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.SUBSCRIBED_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: Array.from({ length: StateConst.ITEM_PER_PAGE + 1 }, () => ""),
          currentPage: 2,
          lastPage: 1,
        },
      };
      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow--hidden");
    });

    it("첫 페이지도 마지막 페이지도 아닌 경우, 양쪽 화살표 모두 사라지지 않는다.", () => {
      const initialState: MainViewState = {
        currentTab: StateConst.SUBSCRIBED_PRESS,
        currentView: StateConst.GRID_VIEW,

        gridState: {
          pressList: [],
          subscribedPressList: Array.from({ length: StateConst.ITEM_PER_PAGE * 2 + 1 }, () => ""),
          currentPage: 2,
          lastPage: 1,
        },
      };

      const store = createStore<MainViewState>(initialState, reducer);
      const mainView = new MainView(store);

      mainView.updateArrowVisibility();

      expect(mainView.$prevButton.className).toBe("main-view__left-arrow");
      expect(mainView.$nextButton.className).toBe("main-view__right-arrow");
    });
  });
});
