import { createElement } from '@utils/domUtils';
import PressInfo from '@components/main/listView/pressNews/PressInfo';
import ArticleSection from '@components/main/listView/pressNews/ArticleSection';
import style from '@components/main/listView/ListView.module.css';

export default class PressNews {
  public readonly element = createElement('article', { class: style.press_news });
  private pressInfo = new PressInfo();
  private articleSection = new ArticleSection();

  constructor() {
    this.element.append(this.pressInfo.element, this.articleSection.element);
  }

  updateView({ news, subscriptionInfo }: { news: NewsData | null; subscriptionInfo: string[] }) {
    if (!news) {
      return;
    }
    this.pressInfo.updateView(news.mediaInfo, subscriptionInfo);
    this.articleSection.updateView(news);
  }
}
