import { PressInfo } from './PressInfo';
import { ArticleSection } from './ArticleSection';
import { createElement } from '../../../../utils/domUtils';
import style from '../ListView.module.css';

export class PressNews {
  public readonly element = createElement('article', { class: style.press_news });
  private pressInfo = new PressInfo();
  private articleSection = new ArticleSection();

  constructor() {
    this.element.append(this.pressInfo.element, this.articleSection.element);
  }

  updateView({ news, subscriptionInfo }: { news: NewsData | null, subscriptionInfo: string[] }) {
    if (!news) {
      return;
    }
    this.pressInfo.updateView(news.mediaInfo, subscriptionInfo);
    this.articleSection.updateView(news);
  }
}
