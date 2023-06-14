import Component from "@components/common/Component.ts";
import { EState, dispatch, observeStates } from "@store/index.ts";

export default class MainNews extends Component {
  private contentViewBtns: HTMLButtonElement[] = [];
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
    listViewBtn.id = "list-view";
    listViewBtn.type = "button";
    const gridViewBtn = document.createElement("button");
    gridViewBtn.className = "is-active";
    gridViewBtn.id = "grid-view";
    gridViewBtn.type = "button";
    contentViewBtnsWrapper.append(listViewBtn, gridViewBtn);

    header.append(pressViewBtnsWrapper, contentViewBtnsWrapper);

    const main = document.createElement("main");

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/MainNews/MainNews.scss"
    );

    topElement.append(stylesheetLink, header, main);

    super(topElement);
    this.contentViewBtns = [listViewBtn, gridViewBtn];
    this.main = main;

    observeStates(this, EState.MainContentView);
    dispatch({ type: EState.MainContentView, content: "grid-view" });
  }

  setProps({ mainContentView }: { mainContentView: string }) {
    this.main.innerHTML = "";
    if (mainContentView === "grid-view") {
      this.main.appendChild(document.createElement("grid-view"));
      this.setActiveContentViewBtn("grid-view");
    } else if (mainContentView === "list-view") {
      this.main.appendChild(document.createElement("list-view"));
      this.setActiveContentViewBtn("list-view");
    }
  }

  setActiveContentViewBtn(targetBtnId: string) {
    this.contentViewBtns.forEach((btn) => {
      if (btn.id === targetBtnId) btn.classList.add("is-active");
      else btn.classList.remove("is-active");
    });
  }

  connectedCallback() {
    this.contentViewBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        dispatch({
          type: EState.MainContentView,
          content: btn.id,
        });
      });
    });
  }
}

customElements.define("main-news", MainNews);
