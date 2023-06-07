import { RollingNewsBarItem, RollingNewsData } from "./rollingNewsBarItem";
import { RollingNewsProps } from "./rollingNewsBarObservable";
import { RollingNewsBarStore } from "./rollingNewsBarStore";

export class RollingNewsBar {
  private store: RollingNewsBarStore = new RollingNewsBarStore();

  private rollingNewsBar: HTMLElement = document.createElement("div");
  private container: HTMLElement = document.createElement("div");
  private item: RollingNewsBarItem = new RollingNewsBarItem();
  private nextItem: RollingNewsBarItem = new RollingNewsBarItem();

  private startRolling: () => void;

  constructor(initRollingDelay?: number) {
    this.initElement();
    this.setEvents();
    this.startRolling = this.startRollingFn.bind(this, initRollingDelay);
    this.subscribeStore();
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
      this.store.increaseRollingIndex();
    });
  }

  private startRollingFn(initRollingDelay?: number) {
    this.store.unsubscribe(this.startRolling);

    if (initRollingDelay) {
      window.setTimeout(() => {
        this.rolling();
      }, initRollingDelay);

      return;
    }

    this.rolling();
  }

  private subscribeStore() {
    this.store.subscribe((props: RollingNewsProps) => this.updateRender(props));
    this.store.subscribe(() => this.inactivateAnimation());
    this.store.subscribe(this.startRolling);
  }

  getElement() {
    return this.rollingNewsBar;
  }

  initSetNewsData(data: RollingNewsData[]) {
    this.store.setNewsData(data);
  }

  private updateRender(props: RollingNewsProps) {
    const { newsData, rollingIndex } = props;
    const itemData = newsData[rollingIndex];
    const nextItemData =
      rollingIndex === newsData.length - 1 ? newsData[0] : newsData[rollingIndex + 1];

    if (!itemData) {
      throw new Error("newsData is null(or undefined)");
    }

    if (!nextItemData) {
      throw new Error("nextItemData is null(or undefined)");
    }

    this.item.updateData(itemData);
    this.nextItem.updateData(nextItemData);
  }

  private rolling() {
    const ROLLING_INTERVAL_TIME = 5000;

    this.store.intervalId = window.setInterval(() => {
      this.activateAnimation();
    }, ROLLING_INTERVAL_TIME);
  }

  stopRolling() {
    if (!this.store.intervalId) {
      return;
    }

    window.clearInterval(this.store.intervalId);
    this.store.intervalId = null;
  }

  private activateAnimation() {
    this.container.className = "rolling-news-bar__container--active";
  }

  private inactivateAnimation() {
    this.container.className = "rolling-news-bar__container";
  }
}
