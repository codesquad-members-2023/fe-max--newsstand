import { Base } from "./Base";
import { Header } from "./header/Header";

export class App extends Base {
  root: HTMLElement;
  header: Header;
  constructor(root: HTMLElement) {
    super();
    this.root = root;
    this.header = new Header();

    this.render(`
        <div class="app"></div>
    `);
    this.init();
  }

  init() {
    this.setChildren(this.header);
    this.root.appendChild(this.node!);
  }
}

