import { shuffleArray } from "@utils/shuffleArray";
import { GridView } from "./gridView/gridView";
import { TabAndViewer } from "./tabAndViewer";

export interface PressLogo {
  src: string;
  alt: string;
}

export class MainView {
  $mainView: HTMLElement = document.createElement("section");
  private tabAndViewer: TabAndViewer = new TabAndViewer();
  private $leftArrow: HTMLElement = document.createElement("div");
  private $rightArrow: HTMLElement = document.createElement("div");

  private gridStore: GridStore = new GridStore();
  private gridView: GridView = new GridView(this.gridStore);

  constructor() {
    this.initElement();
    this.setEvents();
    this.initGridViewRender();
  }

  initElement() {
    this.$mainView.append(this.tabAndViewer.getElement());

    this.$mainView.className = "main-view";
    this.$leftArrow.className = "main-view__left-arrow";
    this.$rightArrow.className = "main-view__right-arrow";

    this.$mainView.append(this.$leftArrow, this.$rightArrow);
    this.$mainView.append(this.gridView.getElement());
  }

  setEvents() {
    this.$leftArrow.addEventListener("click", () => {
      this.gridView.prevPageRender();
      this.updateArrowVisibility();
    });

    this.$rightArrow.addEventListener("click", () => {
      this.gridView.nextPageRender();
      this.updateArrowVisibility();
    });
  }

  updateArrowVisibility() {
    if (this.gridStore.isFirstPage()) {
      this.$leftArrow.className = "main-view__left-arrow--hidden";
    } else {
      this.$leftArrow.className = "main-view__left-arrow";
    }

    if (this.gridStore.isLastPage()) {
      this.$rightArrow.className = "main-view__right-arrow--hidden";
    } else {
      this.$rightArrow.className = "main-view__right-arrow";
    }
  }

  async initGridViewRender() {
    await this.gridStore.fetchPressLogos();
    this.gridStore.shufflePressLogos();
    this.gridView.appendPressBoxes();
    this.updateArrowVisibility();
  }
}

export class GridStore {
  private logos: PressLogo[] = [];
  private subscribedPressList: string[] = [];
  private currentPage: number = 1;
  private lastPage: number = 1;
  private ITEM_PER_PAGE: number = 24;

  constructor() {
    this.initSubscribedPressList();
  }

  initSubscribedPressList() {
    const subscribedPressList = localStorage.getItem("subscribed-press-list");

    this.subscribedPressList = subscribedPressList ? JSON.parse(subscribedPressList) : [];
  }

  getSubscribedPressList() {
    return this.subscribedPressList;
  }

  setSubscribedPressList(subscribedPressList: string[]) {
    this.subscribedPressList = subscribedPressList;
  }

  isSubscribedPress(pressName: string) {
    return this.subscribedPressList.includes(pressName);
  }

  private setLastPage(logosLength: number) {
    this.lastPage = Math.ceil(logosLength / this.ITEM_PER_PAGE);
  }

  getPaginatedLogos() {
    return this.logos.slice(
      (this.currentPage - 1) * this.ITEM_PER_PAGE,
      this.currentPage * this.ITEM_PER_PAGE
    );
  }

  increasePage() {
    if (this.currentPage >= this.lastPage) {
      return;
    }

    this.currentPage += 1;
  }

  decreasePage() {
    if (this.currentPage <= 1) {
      return;
    }

    this.currentPage -= 1;
  }

  isFirstPage() {
    return this.currentPage === 1;
  }

  isLastPage() {
    return this.currentPage === this.lastPage;
  }

  async fetchPressLogos() {
    const response = await fetch("http://localhost:8080/press-logos");
    const data = await response.json();

    this.logos = data;
    this.setLastPage(data.length);
  }

  shufflePressLogos() {
    this.logos = shuffleArray(this.logos);
  }
}
