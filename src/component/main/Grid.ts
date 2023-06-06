import { currentTypeList } from "../../utils/types";
import { store } from "../../Store";
import { Base } from "../Base";

const ITEM_PER_PAGE = 24;

type GridProps = {
  currentPage: number;
  currentType: "all" | "sub";
  grid: {
    currentTypeList: currentTypeList;
    currentViewList: currentTypeList;
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
            `<div class="main__grid__item" 
              addMouseleave="handleGridItemBlur" 
              addMouseEnter="handleGridItemHover" 
              data-components="gridItem">
            </div>`
        ).join("")}
      </div>`
    );
    this.setGrid();
  }

  setGrid() {
    this.clearGridItem();

    const currentViewList = this.props.grid.currentViewList;
    const gridElement = this.components["gridItem"];

    this.itemLayerList = [];
    currentViewList.forEach((data, index) => {
      const subscribeList = this.getSubscribeList();
      const isSubscribe = subscribeList.includes(data.alt);
      const element = this.setTemplate(
        `<img src="${data.src}" alt="${data.alt}">`
      );

      const layer = this.setTemplate(
        `<div class="main__grid__item__layer">
          <button class="main__grid__item__layer-btn" addClick="handleSubscribeBtnClick">
            <img src="./src/assets/plus.svg">
            <span>${isSubscribe ? `해지하기` : `구독하기`}</span>
          </button>
        </div>`
      );

      gridElement[index].appendChild(element);
      this.itemLayerList.push({ element: layer, pressName: data.alt });
    });
  }

  setSubscribePress() {
    this.clearGridItem();
    this.itemLayerList = [];

    const gridList = this.props.grid.currentTypeList;
    const gridElement = this.components["gridItem"];
    const elementList: Element[] = [];

    gridList.forEach((data) => {
      const subscribeList = this.getSubscribeList();
      const isSubscribe = subscribeList.includes(data.alt);

      if (isSubscribe) {
        const element = this.setTemplate(
          `<img src="${data.src}" alt="${data.alt}">`
        );

        const layer = this.setTemplate(
          `<div class="main__grid__item__layer">
            <button class="main__grid__item__layer-btn" addClick="handleSubscribeBtnClick">
              <img src="./src/assets/plus.svg">
              <span>${isSubscribe ? `해지하기` : `구독하기`}</span>
            </button>
          </div>`
        );

        this.itemLayerList.push({ element: layer, pressName: data.alt });
        elementList.push(element);
      }
    });

    elementList.forEach((element, index) => {
      gridElement[index].appendChild(element);
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
    const isAppendAble =
      target instanceof HTMLElement &&
      this.itemLayerList.hasOwnProperty(targetIndex);

    if (isAppendAble) {
      target.appendChild(this.itemLayerList[targetIndex].element);
    }
  }

  handleGridItemBlur(event: Event) {
    const target = event.currentTarget;
    const gridItems = this.components["gridItem"];
    const targetIndex = gridItems.findIndex((element) => element === target);
    const isRemoveAble = this.itemLayerList.hasOwnProperty(targetIndex);

    if (isRemoveAble) {
      this.itemLayerList[targetIndex].element.remove();
    }
  }

  handleSubscribeBtnClick(event: Event) {
    const clickedButton = event.currentTarget;
    const currentIndex = this.itemLayerList.findIndex(
      ({ element }) => element.firstElementChild === clickedButton
    );
    const pressName = this.props.grid.currentViewList[currentIndex].alt;
    const currentSubscribedList = this.getSubscribeList() || [];

    if (currentSubscribedList.includes(pressName)) {
      const newSubscribedList = currentSubscribedList.filter(
        (pressNameItem: string) => pressNameItem !== pressName
      );

      localStorage.setItem("subscribe", JSON.stringify(newSubscribedList));
    } else {
      currentSubscribedList.push(pressName);

      localStorage.setItem("subscribe", JSON.stringify(currentSubscribedList));
    }

    store.dispatch({
      type: "UPDATE_SUBSCRIBE",
      subscribedPress: this.getSubscribeList(),
    });

    this.setGrid();
  }

  getSubscribeList() {
    const subscribeList = localStorage.getItem("subscribe");

    if (subscribeList) {
      return JSON.parse(subscribeList);
    }

    localStorage.setItem("subscribe", JSON.stringify([]));

    return [];
  }

  update(props: GridProps) {
    this.props = props;
    this.setGrid();
  }
}
