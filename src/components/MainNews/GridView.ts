import Component from "@components/common/Component.ts";
import { EState, observeStates, unobserveStates, dispatch } from "@store/index";

export type TGridViewData = {
  src: string;
  alt: string;
};

class GridView extends Component {
  private tableChunks: TGridViewData[][] = [];
  private currentTableChunkIdx: number = 0; // keep track of current chunk to display.
  private numPressBoxesPerTableChunk: number = 24;

  private leftBtn: HTMLButtonElement;
  private rightBtn: HTMLButtonElement;
  private pressBoxes: Element[];

  constructor() {
    const topElement = document.createElement("div");
    topElement.className = "grid-view-container";

    const leftBtn = document.createElement("button");
    leftBtn.className = "left-btn";
    leftBtn.type = "button";
    const rightBtn = document.createElement("button");
    rightBtn.className = "right-btn";
    rightBtn.type = "button";

    const gridContainer = document.createElement("div");
    gridContainer.className = "grid-container";
    Array.from({ length: 24 }, () => {
      const pressBox = document.createElement("div");
      pressBox.className = "press-box";
      gridContainer.appendChild(pressBox);
    });

    const stylesheetLink = Component.createStylesheetLink(
      "src/components/MainNews/GridView.scss"
    );

    topElement.append(leftBtn, rightBtn, gridContainer, stylesheetLink);

    super(topElement);
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.pressBoxes = [...gridContainer.querySelectorAll(".press-box")];

    observeStates(this, EState.GridViewData);
    dispatch({ type: EState.GridViewData });
  }

  setProps({ gridViewData }: { gridViewData: TGridViewData[] }) {
    this.tableChunks = this.chunkIntoTables(gridViewData);
    this.updateTable(this.tableChunks[this.currentTableChunkIdx]);
  }

  chunkIntoTables(gridViewData: TGridViewData[]) {
    return gridViewData.reduce((acc: TGridViewData[][], curr, idx) => {
      const chunkIdx = Math.floor(idx / this.numPressBoxesPerTableChunk);

      if (!acc[chunkIdx]) acc[chunkIdx] = [];
      acc[chunkIdx].push(curr);

      return acc;
    }, []);
  }

  updateTable(tableChunk: TGridViewData[]) {
    if (this.currentTableChunkIdx === 0) {
      this.leftBtn.classList.add("is-inactive");
    } else if (this.currentTableChunkIdx === this.tableChunks.length - 1) {
      this.rightBtn.classList.add("is-inactive");
    } else {
      this.leftBtn.classList.remove("is-inactive");
      this.rightBtn.classList.remove("is-inactive");
    }

    // Loop through `pressBoxes` and update each `pressBox`'s content with the given `tableChunk`.
    this.pressBoxes.forEach((pressBox, idx) => {
      const { src, alt } = tableChunk[idx];
      pressBox.innerHTML = `
        <img src="${src}" alt="${alt}" />
      `;
    });
  }

  connectedCallback() {
    this.leftBtn.addEventListener("click", () => {
      this.currentTableChunkIdx--;
      this.updateTable(this.tableChunks[this.currentTableChunkIdx]);
    });
    this.rightBtn.addEventListener("click", () => {
      this.currentTableChunkIdx++;
      this.updateTable(this.tableChunks[this.currentTableChunkIdx]);
    });
  }

  disconnectedCallback() {
    unobserveStates(this, EState.GridViewData);
  }
}

customElements.define("grid-view", GridView);
