import RollingNews from "./RollingNews";

export default class NewsBar {
  public element: HTMLElement;
  private leftRollingNews: RollingNews;
  private rightRollingNews: RollingNews;

  constructor() {
    this.element = document.createElement('section');
    this.leftRollingNews = new RollingNews();
    this.rightRollingNews = new RollingNews();

    this.element.append(this.leftRollingNews.element, this.rightRollingNews.element);
  }
}