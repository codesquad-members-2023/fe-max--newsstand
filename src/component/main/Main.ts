import { GridData } from "../../utils/types";
import { Base } from "../Base";
type MainState = {
  currentMode: "grid" | "list";
  grid: {
    gridData: GridData;
  };
};

export class Main extends Base {
  constructor(private state: MainState) {
    super();
    this.render(`
        <main class="main">
            ${this.setTab()}
            <div class="main__grid">
              ${Array.from(
                { length: 24 },
                () =>
                  '<div class="main__grid__item" data-components="gridItem"></div>'
              ).join("")}
            </div>
            ${this.setButton()}
        </main>
    `);
    this.setGrid();
  }

  setTab() {
    return `
        <div class="main__tab">
            <div class="main__tab__press">
                <div class="main__tab__press-all">전체 언론사</div>
                <div class="main__tab__press-subscribed">내가 구독한 언론사</div>
            </div>
            <div class="main__tab__buttons">
                <img class="main__tab__buttons-list" src="./src/assets/list.svg">
                <img class="main__tab__buttons-grid" src="./src/assets/grid-select.svg">
            </div>
        </div>
    `;
  }

  setButton() {
    return `
      <div class="main__buttons">
        <button class="main__buttons-prev">
         <img src="./src/assets/LeftButton.svg">
        </button>
        <button class="main__buttons-next">
          <img src="./src/assets/RightButton.svg">
        </button>
      </div>
    `;
  }

  setGrid() {
    const gridData = this.state.grid.gridData;
    const gridElement = this.components["gridItem"];
    gridData.forEach((data, index) => {
      const element = this.setTemplate(
        `<img src="${data.src}" alt="${data.alt}">`
      );

      gridElement[index].appendChild(element);
    });
  }

  clearGridImg() {
    const gridElement = this.components["gridItem"];
    gridElement.forEach((element) => {
      element.innerHTML = "";
    });
  }

  update(props: MainState) {}
}
