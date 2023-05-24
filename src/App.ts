import Header from "./Header";

export default class App {
  public element: HTMLElement;
  private header: Header;
  constructor() {
    this.element = document.querySelector('#app')!;
    this.header = new Header();
  }

  render() {
    this.element.append(this.header.element);
  }
}