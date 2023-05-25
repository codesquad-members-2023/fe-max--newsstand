import GridView from "./GridView";
import MainHeader from "./MainHeader";
import style from './Main.module.css'

type MainProps = {
  gridImgs: GridImg[]
}

export default class Main {
  public element: HTMLElement;
  private header: MainHeader;
  private content: GridView;

  constructor(props: MainProps) {
    this.element = document.createElement('main');
    this.element.classList.add(style.main);

    this.header = new MainHeader();
    this.content = new GridView({ gridImgs: props.gridImgs});

    this.element.append(this.header.element, this.content.element);
  }
}