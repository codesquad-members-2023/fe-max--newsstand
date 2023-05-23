import { Base } from "./Base";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

export class App extends Base {
  root: HTMLElement;
  header: Header;
  main: Main;
  constructor(root: HTMLElement) {
    super();
    this.root = root;
    this.header = new Header();
    this.main = new Main();

    this.render(`
        <div class="app"></div>
    `);
    this.init();
  }

  init() {
    this.setChildren(this.header, this.main);
    this.root.appendChild(this.node!);
  }
}

