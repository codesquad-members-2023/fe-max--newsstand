import { StateConst, Store } from "@store/types";
import { createAction } from "@store/actions";
import { MainViewState } from ".";

export class TabAndViewer {
  private store: Store<MainViewState>;

  private $tabAndViewer: HTMLElement = document.createElement("div");
  private $tab: HTMLElement = document.createElement("ul");
  private $allPressTab: HTMLElement = document.createElement("li");
  private $subscribedPressTab: HTMLElement = document.createElement("li");
  private $viewerButtons: HTMLElement = document.createElement("ul");
  private $listViewButton: HTMLElement = document.createElement("li");
  private $gridViewButton: HTMLElement = document.createElement("li");

  constructor(store: Store<MainViewState>) {
    this.store = store;

    this.initElement();
    this.initSubscription();
    this.setEvents();
  }

  initElement() {
    this.$tabAndViewer.className = "tab-and-viewer";

    this.$tab.className = "tab-and-viewer__tab";

    this.$allPressTab.className = "tab-and-viewer__all-press-tab--selected";
    this.$allPressTab.textContent = "전체 언론사";

    this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab";
    this.$subscribedPressTab.textContent = "내가 구독한 언론사";

    this.$tab.append(this.$allPressTab, this.$subscribedPressTab);

    this.$viewerButtons.className = "tab-and-viewer__viewer-buttons";
    this.$listViewButton.className = "tab-and-viewer__list-view-button";
    this.$gridViewButton.className = "tab-and-viewer__grid-view-button--selected";

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
      this.store.dispatch(createAction.subscribedPressTabClick());

      return;
    }

    const isAllPressTabClick = target.classList.contains("tab-and-viewer__all-press-tab");

    if (isAllPressTabClick) {
      this.store.dispatch(createAction.allPressTabClick());
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

    const isSubscribedPressTabClick = target.classList.contains(
      "tab-and-viewer__subscribed-press-tab"
    );

    if (isSubscribedPressTabClick) {
      this.store.dispatch(createAction.subscribedPressTabClick());

      return;
    }

    const isAllPressTabClick = target.classList.contains("tab-and-viewer__all-press-tab");

    if (isAllPressTabClick) {
      this.store.dispatch(createAction.allPressTabClick());
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
