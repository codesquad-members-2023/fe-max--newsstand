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
    this.header = new Header({ date: this.state.date });
    this.main = new Main({
      currentMode: this.state.currentMode,
      currentPage: this.state.currentPage,
      grid: this.state.grid,
    });
    this.rollerContainer = new RollerContainer({
      leftRoller: this.state.leftRoller,
      rightRoller: this.state.rightRoller,
    });

    this.render(`
        <div class="app"></div>
    `);
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

