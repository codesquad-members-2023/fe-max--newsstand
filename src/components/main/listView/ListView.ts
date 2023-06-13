import { fetchNewsData } from '../../../store';
import { createElement } from '../../../utils/domUtils';
import { FieldTab } from './FieldTab';
import { PressNews } from './pressNews/PressNews';
import style from './ListView.module.css';

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

export class ListView {
  public readonly element = createElement('section', { class: style.list_view });
  private fieldTab;
  private pressNews;

  constructor(props: ListViewProps) {
    this.fieldTab = new FieldTab(props);
    this.pressNews = new PressNews();
    this.element.append(this.fieldTab.element, this.pressNews.element);

    fetchNewsData(props.listIndex);
  }

  updateView(props: ListViewProps) {
    this.fieldTab.updateView(props);
    this.pressNews.updateView(props);
  }
}
