import { store } from "../../Store";
import { GridData, newsStandState } from "../../utils/types";
import { Base } from "../Base";
type MainState = {
  currentMode: "grid" | "list";
  currentPage: number;
  grid: {
    gridData: GridData;
    currentGridList: GridData;
  };
};

export class Main extends Base {
  ITEM_PER_PAGE: number = 24;
  itemLayerList: { element: Element; pressName: string }[] = [];
  constructor(private state: MainState) {
    super();
    this.render(`
        <main class="main">
            ${this.setTab()}
            <div class="main__grid">
              ${Array.from(
                { length: this.ITEM_PER_PAGE },
                () =>
                  '<div class="main__grid__item" addMouseleave="handleGridItemBlur" addMouseEnter="handleGridItemHover" data-components="gridItem"></div>'
              ).join("")}
            </div>
            <div class="main__buttons" data-component="buttonsDiv">
              ${this.setButton()}
            </div>
        </main>
    `);
    this.setGrid();
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
      Math.floor(this.state.grid.gridData.length / this.ITEM_PER_PAGE) ===
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

  setGrid() {
    const currentGridList = this.state.grid.currentGridList;
    const gridElement = this.components["gridItem"];
    this.itemLayerList = [];
    currentGridList.forEach((data, index) => {
      const isSubscribe = localStorage.getItem(data.alt);
      const element = this.setTemplate(
        `<img src="${data.src}" alt="${data.alt}">`
      );
      const layer = this.setTemplate(
        `<div class="main__grid__item__layer">
          <button class="main__grid__item__layer-btn" addClick="handleSubscribeBtnClick">
            <img src="./src/assets/plus.svg">
            <span>${isSubscribe === null ? `구독하기` : `해지하기`}</span>
          </button>
        </div>`
      );

      gridElement[index].appendChild(element);
      this.itemLayerList.push({ element: layer, pressName: data.alt });
    });
  }

  clearGridItem() {
    const gridElement = this.components["gridItem"];
    gridElement.forEach((element) => {
      element.innerHTML = "";
    });
  }

  handleNextBtnClick() {
    store.dispatch({ type: "INCREMENT_PAGE" });
  }

  handlePrevBtnClick() {
    store.dispatch({ type: "DECREMENT_PAGE" });
  }

  handleGridItemHover(event: Event) {
    const target = event.currentTarget;
    const gridItems = this.components["gridItem"];
    const currentPage = this.state.currentPage;
    const itemOffset = currentPage * this.ITEM_PER_PAGE;
    const targetIndex = gridItems.findIndex((element) => element === target);

    if (target instanceof HTMLElement) {
      target.appendChild(this.itemLayerList[targetIndex].element);
    }

    if (targetIndex >= 0) {
      const actualIndex = itemOffset + targetIndex;
      const pressName = this.state.grid.gridData[actualIndex].alt;
    }
  }

  handleGridItemBlur(event: Event) {
    const target = event.currentTarget;
    const gridItems = this.components["gridItem"];
    const targetIndex = gridItems.findIndex((element) => element === target);

    this.itemLayerList[targetIndex].element.remove();
  }

  handleSubscribeBtnClick(event: Event) {
    const target = event.currentTarget;
    const currentIndex = this.itemLayerList.findIndex(
      (element) => element.element.firstElementChild === target
    );
    const pressName = this.state.grid.currentGridList[currentIndex].alt;
    const isSubscribe = localStorage.getItem(pressName);

    if (target instanceof HTMLElement) {
      if (isSubscribe) {
        localStorage.removeItem(pressName);
      } else {
        localStorage.setItem(pressName, pressName);
      }
      this.clearGridItem();
      this.setGrid();
    }
  }

  update(state: MainState) {
    if (this.state.currentPage !== state.currentPage) {
      this.state = state;
      this.clearGridItem();
      this.setGrid();
      this.updateButtonDisplay();
    }
  }
}
