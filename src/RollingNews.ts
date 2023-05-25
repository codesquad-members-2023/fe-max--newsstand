import style from './RollingNews.module.css'

export default class RollingNews {
  public element: HTMLElement;
  private press: HTMLAnchorElement;
  private title: HTMLAnchorElement;

  constructor() {
    this.element = document.createElement('article');
    this.element.classList.add(style.rolling_news);

    this.press = document.createElement('a');
    this.press.classList.add('font-title-sm');
    this.press.href = '#'
    this.press.textContent = '연합뉴스';

    this.title = document.createElement('a');
    this.title.classList.add('font-body-sm');
    this.title.href = '#'
    this.title.textContent = 'WSJ "한국, 우크라 위해 포탄 이송…미국이 받아서 전달"';

    this.element.append(this.press, this.title);
  }
}
