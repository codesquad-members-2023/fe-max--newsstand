import { RollingNewsBarItem, RollingNewsData } from "./rollingNewsBarItem";

export class RollingNewsBar {
  private newsData: RollingNewsData[] = [];
  private rollingIndex: number = 0;
  private intervalId: number | null = null;

  private item: RollingNewsBarItem = new RollingNewsBarItem();
  private nextItem: RollingNewsBarItem = new RollingNewsBarItem();
  private rollingNewsBar: HTMLDivElement = document.createElement("div");
  private container: HTMLDivElement = document.createElement("div");

  constructor() {
    this.initElement();
    this.setEvents();
  }

  private initElement() {
    this.rollingNewsBar.className = "rolling-news-bar";
    this.container.className = "rolling-news-bar__container";

    this.container.append(this.item.getElement(), this.nextItem.getElement());
    this.rollingNewsBar.append(this.container);
  }

  private setEvents() {
    const titleElement = this.item.getTitleElement();

    titleElement.addEventListener("mouseenter", () => {
      this.pauseRolling();
    });

    titleElement.addEventListener("mouseleave", () => {
      this.startRolling();
    });

    this.container.addEventListener("transitionend", () => {
      this.increaseRollingIndex();
      this.updateRender();
      this.inactivateAnimation();
    });
  }

  getElement() {
    return this.rollingNewsBar;
  }

  setNewsData(data: RollingNewsData[]) {
    this.newsData = data;
  }

  private increaseRollingIndex() {
    this.rollingIndex += 1;

    if (this.rollingIndex >= this.newsData.length) {
      this.rollingIndex = 0;
    }
  }

  updateRender() {
    const itemData = this.newsData[this.rollingIndex];
    const nextItemData =
      this.rollingIndex === this.newsData.length - 1
        ? this.newsData[0]
        : this.newsData[this.rollingIndex + 1];

    if (itemData == null) throw Error("newsData is null(or undefined)");
    if (nextItemData == null) throw Error("nextItemData is null(or undefined)");

    this.item.updateData(itemData);
    this.nextItem.updateData(nextItemData);
  }

  startRolling() {
    this.intervalId = window.setInterval(() => {
      this.activateAnimation();
    }, 5000);
  }

  pauseRolling() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private activateAnimation() {
    this.container.className = "rolling-news-bar__container--active";
  }

  private inactivateAnimation() {
    this.container.className = "rolling-news-bar__container";
  }
}
