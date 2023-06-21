import { Store } from "@store/types";
import { MainViewState, Press } from "..";
import { GridPressBox } from "./gridPressBox";
import { setPressList } from "@components/mainView/store/actions";
import { shuffleArray } from "@utils/shuffleArray";
import { StateConst } from "../store/types";

export class GridView {
  private store: Store<MainViewState>;

  private $gridView: HTMLElement = document.createElement("div");
  private $frame: HTMLElement = document.createElement("div");
  private $group: HTMLElement = document.createElement("div");

  constructor(store: Store<MainViewState>) {
    this.store = store;

    this.frameRender();
    this.$gridView.append(this.$group);
    this.initSubscription();
    this.initFetchPressList();
  }

  private frameRender() {
    this.$group.className = "grid-view-group";

    this.$gridView.className = "grid-view";

    this.$frame.className = "grid-view-frame";
    this.$frame.innerHTML =
      Array.from(
        new Array(3),
        (_, index) => `<i class="grid-view-frame__row-frame${index + 1}"></i>`
      ).join("") +
      Array.from(
        new Array(5),
        (_, index) => `<i class="grid-view-frame__col-frame${index + 1}"></i>`
      ).join("");

    this.$gridView.append(this.$frame);
  }

  initSubscription() {
    this.store.subscribe(this.updateGridView.bind(this));
  }

  async initFetchPressList() {
    const pressList = await this.fetchPressList();

    if (!pressList) {
      return;
    }

    const shuffledPressList = shuffleArray(pressList);

    setPressList(this.store, shuffledPressList);
  }

  async fetchPressList(): Promise<Press[] | void> {
    try {
      const response = await fetch("http://localhost:8080/press-list");

      return await response.json();
    } catch (error) {
      alert("언론사 리스트를 가져오는데 실패했습니다. 새로고침 하시기 바랍니다.");
    }
  }

  appendPressBoxes() {
    const state = this.store.getState();
    const {
      currentTab,
      gridState: { pressList: list, currentPage, subscribedPressList },
    } = state;

    const filteredList =
      currentTab === StateConst.ALL_PRESS_TAB
        ? list
        : list.filter((press) => subscribedPressList.includes(press.alt));

    const startIndex = (currentPage - 1) * StateConst.ITEM_PER_PAGE;
    const endIndex = currentPage * StateConst.ITEM_PER_PAGE;
    const listToRender = filteredList.slice(startIndex, endIndex);

    const fragment = document.createDocumentFragment();

    listToRender.forEach((press) => {
      const gridPressBox = new GridPressBox(press, this.store);
      const pressBox = gridPressBox.getElement();
      fragment.append(pressBox);
    });

    this.$group.append(fragment);
  }

  getElement() {
    return this.$gridView;
  }

  updateGridView() {
    this.clearPressBox();
    this.appendPressBoxes();
  }

  private clearPressBox() {
    this.$group.innerHTML = "";
  }
}
