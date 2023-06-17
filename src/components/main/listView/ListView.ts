import { fetchNewsData } from '@/actions';
import { createElement } from '@utils/domUtils';
import FieldTab from '@components/main/listView/FieldTab';
import PressNews from '@components/main/listView/pressNews/PressNews';
import style from '@components/main/listView/ListView.module.css';
import { subscribe } from '@/dispatcher';

type ListViewProps = {
  news: NewsData | null;
  subscriptionInfo: string[];
  fields: FieldData[];
  listIndex: number;
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewer: 'listView' | 'gridView';
  };
};

export default class ListView {
  public readonly element = createElement('section', { class: style.list_view });
  private fieldTab;
  private pressNews;

  constructor(props: ListViewProps) {
    this.fieldTab = new FieldTab(props);
    this.pressNews = new PressNews();
    this.element.append(this.fieldTab.element, this.pressNews.element);

    fetchNewsData(props.listIndex);

    subscribe(this.updateView.bind(this));
  }

  updateView(props: ListViewProps) {
    this.fieldTab.updateView(props);
    this.pressNews.updateView(props);
  }
}
