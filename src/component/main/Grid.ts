import { GridData } from "../../utils/types";
import { Base } from "../Base";

const ITEM_PER_PAGE = 24;

type GridProps = {
  currentPage: number;
  grid: {
    gridData: GridData;
    currentGridList: GridData;
  };
};

export class Grid extends Base {
  itemLayerList: { element: Element; pressName: string }[] = [];

  constructor(private props: GridProps) {
    super();
    this.render(
      `<div class="main__grid">
        ${Array.from(
          { length: ITEM_PER_PAGE },
          () =>
            '<div class="main__grid__item" addMouseleave="handleGridItemBlur" addMouseEnter="handleGridItemHover" data-components="gridItem"></div>'
        ).join("")}
      </div>`
    );
    this.setGrid();
  }

  setGrid() {
    const currentGridList = this.props.grid.currentGridList;
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

  handleGridItemHover(event: Event) {
    const target = event.currentTarget;
    const gridItems = this.components["gridItem"];
    const targetIndex = gridItems.findIndex((element) => element === target);

    if (target instanceof HTMLElement) {
      target.appendChild(this.itemLayerList[targetIndex].element);
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
    const pressName = this.props.grid.currentGridList[currentIndex].alt;
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

  update(props: GridProps) {
    this.props = props;
    this.clearGridItem();
    this.setGrid();
  }
}
