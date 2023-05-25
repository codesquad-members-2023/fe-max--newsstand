import MainHeader from "./MainHeader";

export default class Main {
  public element: HTMLElement;
  private header: MainHeader;

  constructor() {
    this.element = document.createElement('main');
    this.header = new MainHeader();

    this.element.append(this.header.element);
  }
}