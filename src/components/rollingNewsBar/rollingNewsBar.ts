import { RollingNewsBarItem, RollingNewsData } from "./rollingNewsBarItem";

export class RollingNewsBar {
  private newsData: RollingNewsData[] = [];
  private rollingIndex: number = 0;
  private intervalId: number | null = null;

  private item: RollingNewsBarItem = new RollingNewsBarItem();
  private nextItem: RollingNewsBarItem = new RollingNewsBarItem();
  private rollingNewsBar: HTMLDivElement = document.createElement("div");
  private container: HTMLDivElement = document.createElement("div");

  constructor(initRollingDelay?: number) {
    this.initElement();
    this.setEvents();
    this.startRolling(initRollingDelay);
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
      this.stopRolling();
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

  initSetNewsData(data: RollingNewsData[]) {
    this.setNewsData(data);
    this.updateRender();
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

  rolling() {
    const ROLLING_INTERVAL_TIME = 5000;

    this.intervalId = window.setInterval(() => {
      this.activateAnimation();
    }, ROLLING_INTERVAL_TIME);
  }

  startRolling(initRollingDelay?: number) {
    if (initRollingDelay) {
      window.setTimeout(() => {
        this.rolling();
      }, initRollingDelay);

      return;
    }

    this.rolling();
  }

  stopRolling() {
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
