import RollingNews from './RollingNews';
import style from './NewsBar.module.css';
import { createElement } from '../../utils/domUtils';

export default class NewsBar {
  public element;
  private leftRollingNews: RollingNews;
  private rightRollingNews: RollingNews;

  constructor() {
    this.element = createElement('section', { class: style.news_bar });

    this.leftRollingNews = new RollingNews();
    this.rightRollingNews = new RollingNews();

    this.element.append(this.leftRollingNews.element, this.rightRollingNews.element);
  }
}
