import { invoke } from '../../../main';
import { getNewsList } from '../../../utils/dataUtils';
import { createElement } from '../../../utils/domUtils';
import { FieldTab } from './FieldTab';
import style from './ListView.module.css';
import { PressNews } from './pressNews/PressNews';

type ListViewProps = {
  news: NewsData | null;
  subscriptionInfo: number[];
  fields: FieldData[];
};

export class ListView {
  public readonly element = createElement('section', { class: style.list_view });
  private fieldTab;
  private pressNews;

  constructor(props: ListViewProps) {
    this.fieldTab = new FieldTab(props);
    this.pressNews = new PressNews();
    this.element.append(this.fieldTab.element, this.pressNews.element);

    this.initNewsData();
  }

  private async initNewsData() {
    const START_INDEX = 0;
    invoke({
      type: 'initNewsData',
      payload: {
        news: await getNewsList(START_INDEX)
      }
    });
  }

  updateView(props: ListViewProps) {
    this.fieldTab.updateView(props);
    this.pressNews.updateView(props);
  }
}
