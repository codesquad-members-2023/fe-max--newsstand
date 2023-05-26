import GridView from './GridView';
import MainHeader from './MainHeader';
import style from './Main.module.css';

type MainProps = {
  gridInfo: GridInfo;
};

export default class Main {
  public element: HTMLElement;
  private header: MainHeader;
  private content: GridView;

  constructor(props: MainProps) {
    this.element = document.createElement('main');
    this.element.classList.add(style.main);

    this.header = new MainHeader();
    this.content = new GridView({ gridInfo: props.gridInfo });

    this.element.append(this.header.element, this.content.element);
  }

  updateProps(props: MainProps) {
    this.content.updateProps({ gridInfo: props.gridInfo });
  }
}
