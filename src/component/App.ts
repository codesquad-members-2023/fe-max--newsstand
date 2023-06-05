import { newsStandState } from "./../utils/types";
import { Base } from "./Base";
import { Header } from "./Header";
import { RollerContainer } from "./RollerContainer";
import { Main } from "./main/Main";

export class App extends Base {
  header: Header;
  rollerContainer: RollerContainer;
  main: Main;

  constructor(private props: newsStandState) {
    super();
    const headerState = { date: this.props.date };
    const mainState = {
      currentContent: this.props.currentContent,
      currentType: this.props.currentType,
      currentPage: this.props.currentPage,
      grid: this.props.grid,
    };
    const rollerContainer = {
      leftRoller: this.props.leftRoller,
      rightRoller: this.props.rightRoller,
    };

    this.header = new Header(headerState);
    this.main = new Main(mainState);
    this.rollerContainer = new RollerContainer(rollerContainer);

    this.render(`<div class="app"></div>`);
    this.setChildren(this.header, this.rollerContainer, this.main);
  }

  update(props: newsStandState) {
    this.header.update(props);
    this.main.update(props);
    this.rollerContainer.update({
      leftRoller: props.leftRoller,
      rightRoller: props.rightRoller,
    });
  }

  renderApp() {
    const root = document.body;

    if (!this.node) {
      throw new Error("App node is not found");
    }

    root.appendChild(this.node);
  }
}
