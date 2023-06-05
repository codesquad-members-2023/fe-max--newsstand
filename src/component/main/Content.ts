import { currentTypeList } from "../../utils/types";
import { Base } from "../Base";
import { Grid } from "./Grid";

type ContentProps = {
  currentContent: "grid" | "list";
  currentType: "all" | "sub";
  currentPage: number;
  grid: {
    currentTypeList: currentTypeList;
    currentViewList: currentTypeList;
  };
};

export class Content extends Base {
  grid: Grid;

  constructor(private props: ContentProps) {
    super();
    const gridProps = {
      currentPage: this.props.currentPage,
      currentType: this.props.currentType,
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
    if (this.props.currentContent === "grid") {
      this.setChildren(this.grid);
    }
  }

  update(props: ContentProps) {
    this.props = props;

    if (this.props.currentContent === "grid") {
      const gridProps = {
        currentPage: this.props.currentPage,
        currentType: this.props.currentType,
        grid: this.props.grid,
      };

      this.grid.update(gridProps);
    }
  }
}
