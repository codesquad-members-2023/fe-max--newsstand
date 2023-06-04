import Component from "@components/common/Component.ts";
import { EState, dispatch, observeStates } from "@store/index.ts";

class MainNews extends Component {
  private contentViewBtnsWrapper: HTMLElement;
  private main: HTMLElement;

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "news-container";

    const header = document.createElement("header");

    const pressViewBtnsWrapper = document.createElement("div");
    pressViewBtnsWrapper.className = "press-view-btns-wrapper";
    const entirePressViewBtn = document.createElement("a");
    entirePressViewBtn.className = "press-view-btn is-active";
    entirePressViewBtn.textContent = "전체 언론사";
    entirePressViewBtn.href = "#";
    const subscribedPressViewBtn = document.createElement("a");
    subscribedPressViewBtn.className = "press-view-btn";
    subscribedPressViewBtn.textContent = "내가 구독한 언론사";
    subscribedPressViewBtn.href = "#";
    pressViewBtnsWrapper.append(entirePressViewBtn, subscribedPressViewBtn);

    const contentViewBtnsWrapper = document.createElement("div");
    contentViewBtnsWrapper.className = "content-view-btns-wrapper";
    const listViewBtn = document.createElement("button");
    listViewBtn.className = "list-view-btn";
    listViewBtn.type = "button";
    const gridViewBtn = document.createElement("button");
    gridViewBtn.className = "grid-view-btn is-active";
    gridViewBtn.type = "button";
    contentViewBtnsWrapper.append(listViewBtn, gridViewBtn);

    header.append(pressViewBtnsWrapper, contentViewBtnsWrapper);

    const main = document.createElement("main");
    const gridView = document.createElement("grid-view");
    main.append(gridView); // initialize content to grid view

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/MainNews/MainNews.scss"
    );

    topElement.append(stylesheetLink, header, main);

    super(topElement);
    this.contentViewBtnsWrapper = contentViewBtnsWrapper;
    this.main = main;

    observeStates(this, EState.MainContentView);
  }

  setProps({ mainContentView }: { mainContentView: string }) {
    this.main.innerHTML = "";
    if (mainContentView === "grid-view") {
      this.main.appendChild(document.createElement("grid-view"));
    } else if (mainContentView === "list-view") {
      // this.main.appendChild(document.createElement("list-view"));
    }
  }

  connectedCallback() {
    this.contentViewBtnsWrapper.addEventListener(
      "click",
      this.contentViewBtnClickHandler
    );
  }

  contentViewBtnClickHandler(evt: MouseEvent) {
    if (evt.target instanceof HTMLButtonElement) {
      const isListViewBtn = evt.target.classList.contains("list-view-btn");

      dispatch({
        type: EState.MainContentView,
        content: `${isListViewBtn ? "list-view" : "grid-view"}`,
      });
    }
  }
}

customElements.define("main-news", MainNews);
