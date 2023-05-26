import { RollingNewsBarItem, RollingNewsData } from "./rollingNewsBarItem";

export class RollingNewsBar {
  private newsData: RollingNewsData[] = [];
  private item: RollingNewsBarItem = new RollingNewsBarItem();
  private nextItem: RollingNewsBarItem = new RollingNewsBarItem();
  private rollingIndex: number = 0;
  private rollingNewsBar: HTMLDivElement = document.createElement("div");
  private container: HTMLDivElement = document.createElement("div");
  private intervalId: number | null = null;

  constructor() {
    this.initRollingNewsBarElement();
    this.setMouseEvent();
  }

  private initRollingNewsBarElement() {
    this.rollingNewsBar.className = "rolling-news-bar";
    this.container.className = "rolling-news-bar__container";

    this.container.append(this.item.getElement(), this.nextItem.getElement());
    this.rollingNewsBar.append(this.container);
  }

  private setMouseEvent() {
    const titleElement = this.item.getTitleElement();

    titleElement.addEventListener("mouseenter", () => {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
    });

    titleElement.addEventListener("mouseleave", () => {
      this.startRolling();
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

    if (this.newsData && this.newsData.length === this.rollingIndex) {
      this.rollingIndex = 0;
    }
  }

  updateRender() {
    this.item.updateData(this.newsData[this.rollingIndex]);

    if (this.rollingIndex === this.newsData.length - 1) {
      this.nextItem.updateData(this.newsData[0]);

      return;
    }

    this.nextItem.updateData(this.newsData[this.rollingIndex + 1]);
  }

  startRolling() {
    this.intervalId = window.setInterval(() => {
      this.activateAnimation();

      this.container.addEventListener(
        "transitionend",
        () => {
          this.increaseRollingIndex();
          this.updateRender();
          this.inactivateAnimation();
        },
        { once: true }
      );
    }, 5000);
  }

  private activateAnimation() {
    this.container.className = "rolling-news-bar__container--active";
  }

  private inactivateAnimation() {
    this.container.className = "rolling-news-bar__container";
  }
}
