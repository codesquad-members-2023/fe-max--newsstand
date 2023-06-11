import { StateConst, Store } from "@store/types";
import { MainViewState } from "..";
import { GridStore } from "../mainView";
import { GridPressBox } from "./gridPressBox";
import { createAction } from "@store/actions";

export class GridView {
  private store: Store<MainViewState>;

  private $gridView: HTMLElement = document.createElement("div");
  private $frame: HTMLElement = document.createElement("div");
  private $group: HTMLElement = document.createElement("div");

  constructor(store: Store<MainViewState>) {
    this.store = store;

    this.frameRender();
    this.$gridView.append(this.$group);
    this.initSubscribe();
    this.initSubscribedPressList();
  }

  async initSubscribedPressList() {
    this.store.dispatch(createAction.setSubscribedPressList());

    const action = await createAction.fetchPressLogos();

    if (action) {
      this.store.dispatch(action);
      this.store.dispatch(createAction.shufflePressLogos());
    }
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

  initSubscribe() {
    this.store.subscribe(this.updateView.bind(this));
  }

  appendPressBoxes() {
    const state = this.store.getState();
    const currentTab = state.currentTab;

    if (currentTab === StateConst.ALL_PRESS) {
      const logos = state.gridState.logos;
      const fragment = document.createDocumentFragment();

      logos.forEach((logo) => {
        const gridPressBox = new GridPressBox(logo, this.store);
        const pressBox = gridPressBox.getElement();

        fragment.append(pressBox);
      });

      this.$group.append(fragment);
    }

    if (currentTab === StateConst.SUBSCRIBE_PRESS) {
      const logos = state.gridState.logos.filter((logo) =>
        state.gridState.subscribedPressList.some((pressName) => pressName === logo.alt)
      );

      const fragment = document.createDocumentFragment();

      logos.forEach((logo) => {
        const gridPressBox = new GridPressBox(logo, this.store);
        const pressBox = gridPressBox.getElement();

        fragment.append(pressBox);
      });

      this.$group.append(fragment);
    }
  }

  getElement() {
    return this.$gridView;
  }

  updateView() {
    this.clearPressBox();
    this.appendPressBoxes();
  }

  prevPageRender() {
    this.gridStore.decreasePage();
    this.updateView();
  }

  nextPageRender() {
    this.gridStore.increasePage();
    this.updateView();
  }

  private clearPressBox() {
    this.$group.innerHTML = "";
  }
}
