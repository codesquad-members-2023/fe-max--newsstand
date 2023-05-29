import { Headline } from "../utils/types";
import { Base } from "./Base";
import { Header } from "./Header";
import { RollerContainer } from "./RollerContainer";
import { Main } from "./main/Main";
type AppProps = {
  date: Date;
  leftRollerHeadline: Headline[];
  rightRollerHeadline: Headline[];
  currentMode: "grid" | "list";
  grid: {
    gridData: { src: string; alt: string }[];
  };
};

export class App extends Base {
  header: Header;
  rollerContainer: RollerContainer;
  main: Main;
  constructor(props: AppProps) {
    super();
    this.header = new Header({ date: props.date });
    this.main = new Main({ currentMode: props.currentMode, grid: props.grid });
    this.rollerContainer = new RollerContainer({
      leftRollerHeadline: props.leftRollerHeadline,
      rightRollerHeadline: props.rightRollerHeadline,
    });
    this.render(`
        <div class="app"></div>
    `);
    this.setChildren(this.header, this.rollerContainer, this.main);
  }

  update(state: AppProps) {
    this.header.update({
      date: state.date,
    });

    this.rollerContainer.update({
      leftRollerHeadline: state.leftRollerHeadline,
      rightRollerHeadline: state.rightRollerHeadline,
    });
  }
}
