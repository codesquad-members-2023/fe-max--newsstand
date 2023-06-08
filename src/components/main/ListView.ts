import { invoke } from '../../main';
import { getNewsList } from '../../utils/dataUtils';
import { createElement } from '../../utils/domUtils';
import { FieldTab } from './FieldTab';
import style from './ListView.module.css';
import { PressNews } from './PressNews';

export class ListView {
  public readonly element;
  private fieldTab;
  private pressNews;

  constructor(props: { news: NewsData | null}) {
    this.element = createElement('section', { class: style.list_view });
    this.fieldTab = new FieldTab();
    this.pressNews = new PressNews();

    this.element.append(this.fieldTab.element, this.pressNews.element);

    this.initNewsData();
  }

  private async initNewsData() {
    invoke({
      type: 'initNewsData',
      payload: {
        news: await getNewsList(0)
      }
    });
  }

  updateView(props: { news: NewsData | null }) {
    this.fieldTab.updateView(props);
    this.pressNews.updateView(props);
  }
}
