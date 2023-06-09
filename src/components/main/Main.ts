import GridView from './gridView/GridView';
import MainHeader from './MainHeader';
import style from './Main.module.css';
import { createElement } from '../../utils/domUtils';
import { ListView } from './listView/ListView';

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

  constructor(props: MainProps) {
    this.element = createElement('main', { class: style.main });
    this.header = new MainHeader(props);
    // this.content = new GridView({
    //   gridInfo: props.gridInfo,
    //   subscriptionInfo: props.subscriptionInfo
    // });
    this.content = new ListView(props);
    this.element.append(this.header.element, this.content.element);
  }

  updateView(props: MainProps) {
    // this.content.updateView({
    //   gridInfo: props.gridInfo,
    //   subscriptionInfo: props.subscriptionInfo
    // });
    this.content.updateView(props);
  }
}
