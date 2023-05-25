import RollingNews from "./RollingNews";
import style from './NewsBar.module.css';

export default class NewsBar {
  public element: HTMLElement;
  private leftRollingNews: RollingNews;
  private rightRollingNews: RollingNews;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add(style.news_bar);

    this.leftRollingNews = new RollingNews();
    this.rightRollingNews = new RollingNews();

    this.element.append(this.leftRollingNews.element, this.rightRollingNews.element);
  }
}