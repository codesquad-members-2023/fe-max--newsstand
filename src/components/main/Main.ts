import GridView from './gridView/GridView';
import MainHeader from './MainHeader';
import style from './Main.module.css';
import { createElement } from '../../utils/domUtils';
import { ListView } from './listView/ListView';
import { ArrowButton } from './ArrowButton';

type MainProps = {
  gridInfo: GridInfo;
  subscriptionInfo: number[];
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewer: 'listView' | 'gridView';
  };
  news: NewsData | null;
  fields: FieldData[];
  arrowInfo: {
    left: boolean;
    right: boolean;
  }
};

export default class Main {
  public readonly element;
  private header: MainHeader;
  private content: GridView | ListView;
  private leftButton;
  private rightButton;

  constructor(props: MainProps) {
    this.element = createElement('main', { class: style.main });
    this.header = new MainHeader(props);
    // this.content = new GridView(props);
    this.content = new ListView(props);
    this.leftButton = new ArrowButton('left');
    this.rightButton = new ArrowButton('right');
    this.element.append(
      this.header.element,
      this.content.element,
      this.leftButton.element,
      this.rightButton.element
    );
  }

  updateView(props: MainProps) {
    // this.content.updateView(props);
    this.content.updateView(props);
    this.leftButton.updateView(props);
    this.rightButton.updateView(props);
  }
}
