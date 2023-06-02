import { GridStore } from "../mainView";
import { GridPressBox } from "./gridPressBox";

export class GridView {
  private gridStore: GridStore;

  private $gridView: HTMLElement = document.createElement("div");
  private $frame: HTMLElement = document.createElement("div");
  private $group: HTMLElement = document.createElement("div");

  constructor(gridStore: GridStore) {
    this.gridStore = gridStore;

    this.frameRender();
    this.$gridView.append(this.$group);
  }

  private frameRender() {
    this.$gridView.className = "grid-view";

    this.$frame.className = "grid-view-frame";
    this.$frame.innerHTML =
      Array(3)
        .fill(null)
        .map((_, index) => `<i class="grid-view-frame__row-frame${index + 1}"></i>`)
        .join("") +
      Array(5)
        .fill(null)
        .map((_, index) => `<i class="grid-view-frame__col-frame${index + 1}"></i>`)
        .join("");

    this.$gridView.append(this.$frame);

    this.$group.className = "grid-view-group";
  }

  appendPressBoxes() {
    const logos = this.gridStore.getPaginatedLogos();
    const fragment = document.createDocumentFragment();

    logos.forEach((logo) => {
      const gridPressBox = new GridPressBox(logo);
      const pressBox = gridPressBox.getElement();

      fragment.append(pressBox);
    });

    this.$group.append(fragment);
  }

  getElement() {
    return this.$gridView;
  }

  prevPageRender() {
    this.gridStore.decreasePage();
    this.clearPressBox();
    this.appendPressBoxes();
  }

  nextPageRender() {
    this.gridStore.increasePage();
    this.clearPressBox();
    this.appendPressBoxes();
  }

  private clearPressBox() {
    this.$group.innerHTML = "";
  }
}
