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
    viewerState: 'listView' | 'gridView';
  };
  news: NewsData | null;
  fields: FieldData[];
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
    // this.content = new GridView({
    //   gridInfo: props.gridInfo,
    //   subscriptionInfo: props.subscriptionInfo
    // });

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
    // this.content.updateView({
    //   gridInfo: props.gridInfo,
    //   subscriptionInfo: props.subscriptionInfo
    // });
    this.content.updateView(props);
  }
}
