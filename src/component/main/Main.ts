import { store } from "../../Store";
import { currentTypeList, newsStandState } from "../../utils/types";
import { Base } from "../Base";
import { Content } from "./Content";

const ITEM_PER_PAGE = 24;

type MainState = {
  currentContent: "grid" | "list";
  currentType: "all" | "sub";
  currentPage: number;
  grid: {
    currentTypeList: currentTypeList;
    currentViewList: currentTypeList;
  };
};

export class Main extends Base {
  content: Content;

  constructor(private state: MainState) {
    super();
    const contentProps = {
      currentContent: this.state.currentContent,
      currentType: this.state.currentType,
      currentPage: this.state.currentPage,
      grid: this.state.grid,
    };

    this.content = new Content(contentProps);
    this.render(`
        <main class="main">
            ${this.setTab()}
            <div class="main__buttons" data-component="buttonsDiv">
              ${this.setButton()}
            </div>
        </main>
    `);

    this.setChildren(this.content);
    this.updateButtonDisplay();

    store.subscribe((newState: newsStandState) => {
      this.update(newState);
    });
  }

  setTab() {
    return `
        <div class="main__tab">
            <div class="main__tab__press">
                <div class="main__tab__press-all select" data-component="pressAllBtn" addClick="handleClickAllContent">전체 언론사</div>
                <div class="main__tab__press-subscribed" data-component="pressSubBtn" addClick="handleClickSubContent">내가 구독한 언론사</div>
            </div>
            <div class="main__tab__buttons">
                <img class="main__tab__buttons-list" src="./src/assets/list.svg">
                <img class="main__tab__buttons-grid" src="./src/assets/grid-select.svg">
            </div>
        </div>
    `;
  }

  setButton() {
    return `
        <button class="main__buttons-prev" data-component="prevBtn" addClick="handlePrevBtnClick">
         <img src="./src/assets/LeftButton.svg">
        </button>
        <button class="main__buttons-next" data-component="nextBtn" addClick="handleNextBtnClick">
          <img src="./src/assets/RightButton.svg">
        </button>
    `;
  }

  updateButtonDisplay() {
    if (this.state.currentType === "sub") {
    }
    const currentPage = this.state.currentPage;
    const isFirstPage = currentPage === 0;
    const isLastPage =
      Math.ceil(this.state.grid.currentTypeList.length / ITEM_PER_PAGE) ===
      currentPage + 1;
    const { prevBtn, nextBtn, buttonsDiv } = this.component;

    if (isFirstPage) {
      buttonsDiv.contains(prevBtn) && buttonsDiv.removeChild(prevBtn);
    } else if (!buttonsDiv.contains(prevBtn)) {
      buttonsDiv.prepend(prevBtn);
    }

    if (isLastPage) {
      buttonsDiv.contains(nextBtn) && buttonsDiv.removeChild(nextBtn);
    } else if (!buttonsDiv.contains(nextBtn)) {
      buttonsDiv.appendChild(nextBtn);
    }
  }

  handleNextBtnClick() {
    store.dispatch({ type: "INCREMENT_PAGE" });
  }

  handlePrevBtnClick() {
    store.dispatch({ type: "DECREMENT_PAGE" });
  }

  handleClickAllContent() {
    this.component["pressAllBtn"].classList.add("select");
    this.component["pressSubBtn"].classList.remove("select");
    if (this.state.currentType !== "all") {
      store.dispatch({ type: "SELECT_ALL_CONTENT" });
    }
  }

  handleClickSubContent() {
    this.component["pressSubBtn"].classList.add("select");
    this.component["pressAllBtn"].classList.remove("select");

    const list =
      localStorage.getItem("subscribe") === null
        ? []
        : JSON.parse(localStorage.getItem("subscribe")!);

    if (this.state.currentType !== "sub") {
      store.dispatch({
        type: "SELECT_SUB_CONTENT",
        list: list,
      });
    }
  }

  update(state: MainState) {
    const isChangedCurrentPage = this.state.currentPage !== state.currentPage;
    const isChangedCurrentType = this.state.currentType !== state.currentType;

    if (isChangedCurrentPage || isChangedCurrentType) {
      this.state = state;
      this.updateButtonDisplay();
      this.content.update(state);
    }
  }
}
