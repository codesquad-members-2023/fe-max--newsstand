import { createElement } from '@utils/domUtils';
import MainHeader from '@components/main/MainHeader';
import ListView from '@components/main/listView/ListView';
import ArrowButton from '@components/main/ArrowButton';
import GridView from '@components/main/gridView/GridView';
import style from '@components/main/Main.module.css';

type MainProps = {
  gridInfo: GridInfo;
  subscriptionInfo: string[];
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewer: 'listView' | 'gridView';
  };
  news: NewsData | null;
  fields: FieldData[];
  listIndex: number;
  arrowInfo: {
    left: boolean;
    right: boolean;
  };
};

export default class Main {
  public readonly element;
  private header: MainHeader;
  private content: GridView | ListView;
  private leftButton;
  private rightButton;
  private viewer;
  private VIEWER_COMPONENTS = {
    gridView: GridView,
    listView: ListView
  };

  constructor(props: MainProps) {
    this.element = createElement('main', { class: style.main });
    this.header = new MainHeader(props);
    this.content = new this.VIEWER_COMPONENTS[props.mainViewerInfo.viewer](props);
    this.leftButton = new ArrowButton('left');
    this.rightButton = new ArrowButton('right');
    this.element.append(
      this.header.element,
      this.content.element,
      this.leftButton.element,
      this.rightButton.element
    );
    this.viewer = props.mainViewerInfo.viewer;
  }

  updateView(props: MainProps) {
    if (this.viewer !== props.mainViewerInfo.viewer) {
      this.content = new this.VIEWER_COMPONENTS[props.mainViewerInfo.viewer](props);
      this.viewer = props.mainViewerInfo.viewer;

      this.element.replaceChild(this.content.element, this.element.childNodes[1]!);
    }
    this.header.updateView(props);
    this.content.updateView(props);
    this.leftButton.updateView(props);
    this.rightButton.updateView(props);
  }
}
