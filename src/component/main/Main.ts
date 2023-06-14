import { ListDataType, currentTypeList } from "../../utils/types";
import { Content } from "./Content";
import { store } from "../../Store";
import { Base } from "../Base";

const ITEM_PER_PAGE = 24;

type MainState = {
  currentContent: "grid" | "list";
  currentType: "all" | "sub";
  currentPage: number;
  grid: {
    currentTypeList: currentTypeList;
    currentViewList: currentTypeList;
  };
  list: {
    listAllList: ListDataType[];
    currentViewIndex: number;
    currentTypeList: ListDataType[];
    currentViewList: ListDataType;
  };
};

export class Main extends Base {
  content: Content;

  constructor(private props: MainState) {
    super();
    const contentProps = {
      currentContent: this.props.currentContent,
      currentType: this.props.currentType,
      currentPage: this.props.currentPage,
      grid: this.props.grid,
      list: this.props.list,
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
  }

  setTab() {
    return `
        <div class="main__tab">
            <div class="main__tab__press">
                <div class="main__tab__press-all select" 
                  data-component="pressAllBtn" 
                  addClick="handleClickAllContent">
                    전체 언론사
                </div>
                <div class="main__tab__press-subscribed" 
                  data-component="pressSubBtn" 
                  addClick="handleClickSubContent">
                  내가 구독한 언론사
                </div>
            </div>
            <div class="main__tab__buttons">
                <img class="main__tab__buttons-list" src="./src/assets/list${
                  this.props.currentContent === "list" ? `-select` : ``
                }.svg" data-component="listTab" addClick="handleClickListTab">
                <img class="main__tab__buttons-grid" src="./src/assets/grid${
                  this.props.currentContent === "grid" ? `-select` : ``
                }.svg" data-component="gridTab" addClick="handleClickGridTab">
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
    const { currentPage, currentContent, grid } = this.props;
    const { prevBtn, nextBtn, buttonsDiv } = this.component;

    const prevButtonExists = buttonsDiv.contains(prevBtn);
    const nextButtonExists = buttonsDiv.contains(nextBtn);

    if (currentContent === "grid") {
      const totalPages = Math.ceil(grid.currentTypeList.length / ITEM_PER_PAGE);
      const isFirstPage = currentPage === 0;
      const isLastPage = totalPages === currentPage + 1;

      if (isFirstPage && prevButtonExists) {
        buttonsDiv.removeChild(prevBtn);
      } else if (!isFirstPage && !prevButtonExists) {
        buttonsDiv.prepend(prevBtn);
      }

      if (isLastPage && nextButtonExists) {
        buttonsDiv.removeChild(nextBtn);
      } else if (!isLastPage && !nextButtonExists) {
        buttonsDiv.appendChild(nextBtn);
      }
    } else {
      buttonsDiv.prepend(prevBtn);
      buttonsDiv.appendChild(nextBtn);
    }
  }

  handleNextBtnClick() {
    if (this.props.currentContent === "grid") {
      store.dispatch({ type: "INCREMENT_PAGE" });
    } else {
      store.dispatch({ type: "INCREMENT_INDEX" });
    }
  }

  handlePrevBtnClick() {
    if (this.props.currentContent === "grid") {
      store.dispatch({ type: "DECREMENT_PAGE" });
    } else {
      store.dispatch({ type: "DECREMENT_INDEX" });
    }
  }

  handleClickAllContent() {
    this.component["pressAllBtn"].classList.add("select");
    this.component["pressSubBtn"].classList.remove("select");

    if (this.props.currentType !== "all") {
      store.dispatch({ type: "SELECT_ALL_CONTENT" });
    }
  }

  handleClickSubContent() {
    this.component["pressSubBtn"].classList.add("select");
    this.component["pressAllBtn"].classList.remove("select");

    if (this.props.currentType !== "sub") {
      store.dispatch({ type: "SELECT_SUB_CONTENT" });
    }
  }

  handleClickGridTab() {
    this.component["gridTab"].setAttribute(
      "src",
      "./src/assets/grid-select.svg"
    );
    this.component["listTab"].setAttribute("src", "./src/assets/list.svg");

    if (this.props.currentContent !== "grid") {
      store.dispatch({ type: "SELECT_GRID_TAB" });
    }
  }

  handleClickListTab() {
    this.component["listTab"].setAttribute(
      "src",
      "./src/assets/list-select.svg"
    );
    this.component["gridTab"].setAttribute("src", "./src/assets/grid.svg");

    if (this.props.currentContent !== "list") {
      store.dispatch({ type: "SELECT_LIST_TAB" });
    }
  }

  update(props: MainState) {
    const isChangedCurrentPage = this.props.currentPage !== props.currentPage;
    const isChangedCurrentType = this.props.currentType !== props.currentType;
    const isChangedCurrentContent =
      this.props.currentContent !== props.currentContent;
    const isChangedCurrentViewList =
      this.props.grid.currentViewList.length !==
      props.grid.currentViewList.length;

    if (
      isChangedCurrentPage ||
      isChangedCurrentType ||
      isChangedCurrentContent ||
      isChangedCurrentViewList
    ) {
      this.props = props;
      this.updateButtonDisplay();
    }
    this.content.update(props);
  }
}

