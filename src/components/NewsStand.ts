import { createElement } from '../utils/domUtils';
import style from './NewsStand.module.css';
import Header from './header/Header';
import Main from './main/Main';
import NewsBar from './newsBar/NewsBar';

type NewsStandProps = {
  dateInfo: Date;
  gridInfo: GridInfo;
  subscriptionInfo: number[];
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewerState: 'listView' | 'gridView';
  };
  news: NewsData | null;
  fields: FieldData[]
};

export default class NewsStand {
  public readonly element;
  private newsBar: NewsBar;
  private main: Main;

  constructor(props: NewsStandProps) {
    this.element = createElement('div', { class: style.news_stand });

    const header = new Header({ dateInfo: props.dateInfo });
    this.newsBar = new NewsBar();
    this.main = new Main(props);

    this.element.append(header.element, this.newsBar.element, this.main.element);
  }

  updateView(props: NewsStandProps) {
    this.main.updateView(props);
  }
}
