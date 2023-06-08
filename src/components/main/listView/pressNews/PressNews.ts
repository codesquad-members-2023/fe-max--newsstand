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

  updateView({ news }: { news: NewsData | null }) {
    if (!news) {
      return;
    }
    this.pressInfo.updateView(news.mediaInfo);
    this.articleSection.updateView(news);
  }
}
