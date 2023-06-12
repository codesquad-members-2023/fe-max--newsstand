import { createElement } from '../../utils/domUtils';
import { PressInfo } from './PressInfo';
import style from './ListView.module.css';
import { NewsSection } from './NewsSection';

export class PressNews {
  public element;
  private pressInfo;
  private newsSection;

  constructor() {
    this.element = createElement('article', { class: style.press_news });
    this.pressInfo = new PressInfo();
    this.newsSection = new NewsSection();

    this.element.append(this.pressInfo.element, this.newsSection.element);
  }

  updateView({ news }: {news: NewsData | null}) {
    if (!news){
      return;
    }
    this.pressInfo.updateView(news.mediaInfo);
    this.newsSection.updateView(news);
  }
}
