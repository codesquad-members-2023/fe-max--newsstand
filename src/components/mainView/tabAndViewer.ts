import { Store } from "@store/types";
import { changeCurrentTabState, changeCurrentViewState } from "@components/mainView/store/actions";
import { MainViewState } from ".";
import { StateConst } from "./store/types";

export class TabAndViewer {
  private store: Store<MainViewState>;

  private $tabAndViewer: HTMLElement = document.createElement("div");
  private $tab: HTMLElement = document.createElement("ul");
  $allPressTab: HTMLElement = document.createElement("li");
  $subscribedPressTab: HTMLElement = document.createElement("li");
  private $viewerButtons: HTMLElement = document.createElement("ul");
  $listViewButton: HTMLElement = document.createElement("li");
  $gridViewButton: HTMLElement = document.createElement("li");

  constructor(store: Store<MainViewState>) {
    this.store = store;

    this.initElement();
    this.initSubscription();
    this.setEvents();
  }

  initElement() {
    this.$tabAndViewer.className = "tab-and-viewer";

    this.$tab.className = "tab-and-viewer__tab";

    this.$allPressTab.className = "tab-and-viewer__all-press-tab";
    this.$allPressTab.textContent = "전체 언론사";

    this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab";
    this.$subscribedPressTab.textContent = "내가 구독한 언론사";

    this.$tab.append(this.$allPressTab, this.$subscribedPressTab);

    this.$viewerButtons.className = "tab-and-viewer__viewer-buttons";
    this.$listViewButton.className = "tab-and-viewer__list-view-button";
    this.$gridViewButton.className = "tab-and-viewer__grid-view-button";

    this.$viewerButtons.append(this.$listViewButton, this.$gridViewButton);

    this.$tabAndViewer.append(this.$tab, this.$viewerButtons);
  }

  initSubscription() {
    this.store.subscribe(this.updateTabSelection.bind(this));
    this.store.subscribe(this.updateViewSelection.bind(this));
  }

  setEvents() {
    this.$tab.addEventListener("click", ({ target }) => this.handleTabClick.call(this, target));
    this.$viewerButtons.addEventListener("click", ({ target }) =>
      this.handleViewButtonClick.call(this, target)
    );
  }

  handleTabClick(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const isAlreadySelected =
      target.classList.contains("tab-and-viewer__all-press-tab--selected") ||
      target.classList.contains("tab-and-viewer__subscribed-press-tab--selected");

    if (isAlreadySelected) {
      return;
    }

    const isPressTabClick = target.classList.contains("tab-and-viewer__subscribed-press-tab");

    if (isPressTabClick) {
      changeCurrentTabState(this.store, StateConst.SUBSCRIBED_PRESS_TAB);

      return;
    }

    const isAllPressTabClick = target.classList.contains("tab-and-viewer__all-press-tab");

    if (isAllPressTabClick) {
      changeCurrentTabState(this.store, StateConst.ALL_PRESS_TAB);
    }
  }

  handleViewButtonClick(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const isAlreadySelected =
      target.classList.contains("tab-and-viewer__list-view-button--selected") ||
      target.classList.contains("tab-and-viewer__grid-view-button--selected");

    if (isAlreadySelected) {
      return;
    }

    const isListViewClick = target.classList.contains("tab-and-viewer__list-view-button");

    if (isListViewClick) {
      changeCurrentViewState(this.store, StateConst.LIST_VIEW);

      return;
    }

    const isGridViewClick = target.classList.contains("tab-and-viewer__grid-view-button");

    if (isGridViewClick) {
      changeCurrentViewState(this.store, StateConst.GRID_VIEW);
    }
  }

  updateTabSelection(state: MainViewState) {
    if (state.currentTab === StateConst.ALL_PRESS_TAB) {
      this.$allPressTab.className = "tab-and-viewer__all-press-tab--selected";
      this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab";

      return;
    }

    if (state.currentTab === StateConst.SUBSCRIBED_PRESS_TAB) {
      this.$allPressTab.className = "tab-and-viewer__all-press-tab";
      this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab--selected";
    }
  }

  updateViewSelection(state: MainViewState) {
    if (state.currentView === StateConst.LIST_VIEW) {
      this.$listViewButton.className = "tab-and-viewer__list-view-button--selected";
      this.$gridViewButton.className = "tab-and-viewer__grid-view-button";

      return;
    }

    if (state.currentView === StateConst.GRID_VIEW) {
      this.$listViewButton.className = "tab-and-viewer__list-view-button";
      this.$gridViewButton.className = "tab-and-viewer__grid-view-button--selected";
    }
  }

  getElement() {
    return this.$tabAndViewer;
  }
}
