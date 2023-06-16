import { createElement } from '@utils/domUtils';
import Header from '@components/header/Header';
import Main from '@components/main/Main';
import NewsBar from '@components/newsBar/NewsBar';
import style from '@components/NewsStand.module.css';

type NewsStandProps = {
  dateInfo: Date;
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
