import { currentTypeList } from "../../utils/types";
import { Base } from "../Base";
import { Grid } from "./Grid";
import { List } from "./LIst";

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
  list: List;

  constructor(private props: ContentProps) {
    super();
    const gridProps = {
      currentPage: this.props.currentPage,
      currentType: this.props.currentType,
      grid: this.props.grid,
    };

    this.grid = new Grid(gridProps);
    this.list = new List();
    this.render(`
        <div class="main__content"></div>
    `);
    this.init();
  }

  init() {
    this.node?.replaceChildren();

    if (this.props.currentContent === "grid") {
      this.setChildren(this.grid);
    } else {
      this.setChildren(this.list);
    }
  }

  update(props: ContentProps) {
    const isChanged =
      props.currentType !== this.props.currentType ||
      props.grid.currentViewList !== this.props.grid.currentViewList;
    const isChangedCurrentContent =
      this.props.currentContent !== props.currentContent;

    this.props = props;

    if (isChanged) {
      const currentContent = this.props.currentContent;
      if (currentContent === "grid") {
        this.grid.update(this.props);
      } else {
      }
    }

    if (isChangedCurrentContent) {
      this.init();
    }
  }
}
