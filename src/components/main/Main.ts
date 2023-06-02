import GridView from './GridView';
import MainHeader from './MainHeader';
import style from './Main.module.css';
import { createElement } from '../../utils/domUtils';

type MainProps = {
  gridInfo: GridInfo;
  subscriptionInfo: number[];
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewerState: 'listView' | 'gridView';
  };
};

export default class Main {
  public element;
  private header: MainHeader;
  private content: GridView;

  constructor(props: MainProps) {
    this.element = createElement('main', { class: style.main });
    this.header = new MainHeader({
      targetMedia: props.mainViewerInfo.targetMedia,
      viewerState: props.mainViewerInfo.viewerState
    });
    this.content = new GridView({
      gridInfo: props.gridInfo,
      subscriptionInfo: props.subscriptionInfo
    });

    this.element.append(this.header.element, this.content.element);
  }

  updateView(props: MainProps) {
    this.content.updateView({
      gridInfo: props.gridInfo,
      subscriptionInfo: props.subscriptionInfo
    });
  }
}
