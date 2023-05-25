import GridView from "./GridView";
import MainHeader from "./MainHeader";

export default class Main {
  public element: HTMLElement;
  private header: MainHeader;
  private content: GridView;

  constructor() {
    this.element = document.createElement('main');
    this.header = new MainHeader();
    this.content = new GridView();

    this.element.append(this.header.element, this.content.element);
  }
}