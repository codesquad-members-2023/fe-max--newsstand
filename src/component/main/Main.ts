import { store } from "../../Store";
import { GridData, newsStandState } from "../../utils/types";
import { Base } from "../Base";
import { Content } from "./Content";

const ITEM_PER_PAGE = 24;

type MainState = {
  currentMode: "grid" | "list";
  currentPage: number;
  grid: {
    gridData: GridData;
    currentGridList: GridData;
  };
};

export class Main extends Base {
  content: Content;

  constructor(private state: MainState) {
    super();
    const contentProps = {
      currentMode: this.state.currentMode,
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
                <div class="main__tab__press-all select">전체 언론사</div>
                <div class="main__tab__press-subscribed">내가 구독한 언론사</div>
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
    const currentPage = this.state.currentPage;
    const isFirstPage = currentPage === 0;
    const isLastPage =
      Math.floor(this.state.grid.gridData.length / ITEM_PER_PAGE) ===
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

  update(state: MainState) {
    if (this.state.currentPage !== state.currentPage) {
      this.state = state;
      this.updateButtonDisplay();
      this.content.update(state);
    }
  }
}
