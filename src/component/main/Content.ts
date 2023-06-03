import { GridData } from "../../utils/types";
import { Base } from "../Base";
import { Grid } from "./Grid";

type ContentProps = {
  currentMode: "grid" | "list";
  currentPage: number;
  grid: {
    gridData: GridData;
    currentGridList: GridData;
  };
};

export class Content extends Base {
  grid: Grid;

  constructor(private props: ContentProps) {
    super();
    const gridProps = {
      currentPage: this.props.currentPage,
      grid: this.props.grid,
    };

    this.grid = new Grid(gridProps);
    this.render(`
        <div class="main__content"></div>
    `);
    this.init();
  }

  init() {
    this.node?.replaceChildren();
    if (this.props.currentMode === "grid") {
      this.setChildren(this.grid);
    }
  }

  update(props: ContentProps) {
    const isChangedProps =
      props.currentPage !== this.props.currentPage ||
      props.currentMode !== this.props.currentMode;

    if (isChangedProps) {
      this.props = props;
    }

    if (this.props.currentMode === "grid") {
      const gridProps = {
        currentPage: this.props.currentPage,
        grid: this.props.grid,
      };

      this.grid.update(gridProps);
    }
  }
}
