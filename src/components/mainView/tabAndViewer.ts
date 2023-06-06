export class TabAndViewer {
  private $tabAndViewer: HTMLElement = document.createElement("div");

  constructor() {
    this.initElement();
  }

  initElement() {
    this.$tabAndViewer.className = "tab-and-viewer";

    const tab = document.createElement("ul");
    tab.className = "tab-and-viewer__tab";

    const allPressTab = document.createElement("li");
    allPressTab.className = "tab-and-viewer__all-press-tab--selected";
    allPressTab.textContent = "전체 언론사";

    const subscribedPressTab = document.createElement("li");
    subscribedPressTab.className = "tab-and-viewer__subscribed-press-tab";
    subscribedPressTab.textContent = "내가 구독한 언론사";

    tab.append(allPressTab, subscribedPressTab);

    const viewerButtons = document.createElement("ul");
    viewerButtons.className = "tab-and-viewer__viewer-buttons";

    const listViewButton = document.createElement("li");
    listViewButton.className = "tab-and-viewer__list-view-button";

    const gridViewButton = document.createElement("li");
    gridViewButton.className = "tab-and-viewer__grid-view-button--selected";

    viewerButtons.append(listViewButton, gridViewButton);

    this.$tabAndViewer.append(tab, viewerButtons);
  }

  getElement() {
    return this.$tabAndViewer;
  }
}
