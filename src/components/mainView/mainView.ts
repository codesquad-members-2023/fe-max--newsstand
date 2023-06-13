import { GridView } from "./gridView/gridView";
import { TabAndViewer } from "./tabAndViewer";
import { StateConst, Store } from "@store/types";
import { MainViewState } from ".";
import { createAction } from "@store/actions";

export class MainView {
  store: Store<MainViewState>;

  $mainView: HTMLElement = document.createElement("section");
  tabAndViewer: TabAndViewer;
  $prevButton: HTMLElement = document.createElement("div");
  $nextButton: HTMLElement = document.createElement("div");

  private gridView: GridView;

  constructor(store: Store<MainViewState>) {
    this.store = store;
    this.tabAndViewer = new TabAndViewer(this.store);
    this.gridView = new GridView(this.store);

    this.initElement();
    this.initSubscription();
    this.setEvents();
  }

  private initElement() {
    this.$mainView.append(this.tabAndViewer.getElement());

    this.$mainView.className = "main-view";
    this.$prevButton.className = "main-view__left-arrow";
    this.$nextButton.className = "main-view__right-arrow";

    this.$mainView.append(this.$prevButton, this.$nextButton);
    this.$mainView.append(this.gridView.getElement());
  }

  setEvents() {
    this.$prevButton.addEventListener("click", () => {
      this.store.dispatch(createAction.prevButtonClick());
    });

    this.$nextButton.addEventListener("click", () => {
      this.store.dispatch(createAction.nextButtonClick());
    });
  }

  initSubscription() {
    this.store.subscribe(this.updateArrowVisibility.bind(this));
  }

  updateArrowVisibility() {
    const state = this.store.getState();

    if (state.currentView === StateConst.LIST_VIEW) {
      this.$prevButton.className = "main-view__left-arrow";
      this.$nextButton.className = "main-view__right-arrow";

      return;
    }

    if (state.currentTab === StateConst.ALL_PRESS) {
      const { currentPage, lastPage } = state.gridState;
      const isFirstPage = currentPage === 1;
      const isLastPage = currentPage === lastPage;

      if (isFirstPage) {
        this.$prevButton.className = "main-view__left-arrow--hidden";
      } else {
        this.$prevButton.className = "main-view__left-arrow";
      }

      if (isLastPage) {
        this.$nextButton.className = "main-view__right-arrow--hidden";
      } else {
        this.$nextButton.className = "main-view__right-arrow";
      }

      return;
    }

    if (state.currentTab === StateConst.SUBSCRIBED_PRESS) {
      const { currentPage } = state.gridState;
      const lastPage = Math.ceil(
        state.gridState.subscribedPressList.length / StateConst.ITEM_PER_PAGE
      );
      const isFirstPage = currentPage === 1;
      const isLastPage = currentPage >= lastPage;

      if (isFirstPage) {
        this.$prevButton.className = "main-view__left-arrow--hidden";
      } else {
        this.$prevButton.className = "main-view__left-arrow";
      }

      if (isLastPage) {
        this.$nextButton.className = "main-view__right-arrow--hidden";
      } else {
        this.$nextButton.className = "main-view__right-arrow";
      }
    }
  }
}
