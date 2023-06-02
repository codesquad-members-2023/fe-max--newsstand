import { newsStandState } from "../utils/types";
import { Base } from "./Base";
import { Header } from "./Header";
import { RollerContainer } from "./RollerContainer";
import { Main } from "./main/Main";

export class App extends Base {
  header: Header;
  rollerContainer: RollerContainer;
  main: Main;

  constructor(private state: newsStandState) {
    super();
    const headerState = { date: this.state.date };
    const mainState = {
      currentMode: this.state.currentMode,
      currentPage: this.state.currentPage,
      grid: this.state.grid,
    };
    const rollerContainer = {
      leftRoller: this.state.leftRoller,
      rightRoller: this.state.rightRoller,
    };

    this.header = new Header(headerState);
    this.main = new Main(mainState);
    this.rollerContainer = new RollerContainer(rollerContainer);

    this.render(`<div class="app"></div>`);
    this.setChildren(this.header, this.rollerContainer, this.main);
  }

  renderApp() {
    const root = document.body;

    if (!root) {
      throw new Error("Root not found");
    }

    if (!this.node) {
      throw new Error("App node is not found");
    }

    root.appendChild(this.node);
  }
}
