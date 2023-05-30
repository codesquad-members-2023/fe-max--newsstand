import { GridView } from "./gridView/gridView";

export class MainView {
  $mainView: HTMLElement = document.createElement("section");
  private $leftArrow: HTMLElement = document.createElement("div");
  private $rightArrow: HTMLElement = document.createElement("div");
  private gridView: GridView = new GridView();

  constructor() {
    this.initElement();
    this.setEvents();
  }

  initElement() {
    this.$mainView.className = "main-view";
    this.$leftArrow.className = "main-view__left-arrow";
    this.$rightArrow.className = "main-view__right-arrow";

    this.$mainView.append(this.$leftArrow, this.$rightArrow);
    this.$mainView.append(this.gridView.getElement());
  }

  setEvents() {
    this.$leftArrow.addEventListener("click", () => {
      this.gridView.prevPageRender();
    });
    this.$rightArrow.addEventListener("click", () => {
      this.gridView.nextPageRender();
    });
  }
}
