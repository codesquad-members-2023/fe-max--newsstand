import { StateConst, Store } from "@store/types";
import { createAction } from "@store/actions";
import { MainViewState } from ".";

export class TabAndViewer {
  private store: Store<MainViewState>;

  private $tabAndViewer: HTMLElement = document.createElement("div");
  private $tab: HTMLElement = document.createElement("ul");
  private $allPressTab: HTMLElement = document.createElement("div");
  private $subscribedPressTab: HTMLElement = document.createElement("div");

  constructor(store: Store<MainViewState>) {
    this.store = store;

    this.initElement();
    this.initSubscribe();
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

    const viewerButtons = document.createElement("ul");
    viewerButtons.className = "tab-and-viewer__viewer-buttons";

    const listViewButton = document.createElement("li");
    listViewButton.className = "tab-and-viewer__list-view-button";

    const gridViewButton = document.createElement("li");
    gridViewButton.className = "tab-and-viewer__grid-view-button--selected";

    viewerButtons.append(listViewButton, gridViewButton);

    this.$tabAndViewer.append(this.$tab, viewerButtons);
  }

  initSubscribe() {
    this.store.subscribe(this.updateTabSelection.bind(this));
  }

  setEvents() {
    this.$tab.addEventListener("click", ({ target }) => this.handleTabClick.call(this, target));
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

  updateTabSelection(state: MainViewState) {
    if (state.currentTab === StateConst.ALL_PRESS) {
      this.$allPressTab.className = "tab-and-viewer__all-press-tab--selected";
      this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab";

      return;
    }

    if (state.currentTab === StateConst.SUBSCRIBE_PRESS) {
      this.$allPressTab.className = "tab-and-viewer__all-press-tab";
      this.$subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab--selected";
    }
  }

  getElement() {
    return this.$tabAndViewer;
  }
}
