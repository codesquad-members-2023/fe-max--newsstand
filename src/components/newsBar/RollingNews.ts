import { createElement } from '../../utils/domUtils';
import style from './RollingNews.module.css';

export default class RollingNews {
  public element;
  private press;
  private title;

  constructor() {
    this.element = createElement('article', { class: style.rolling_news });
    this.press = createElement('a', { class: 'font-title-sm', href: '#' });
    this.press.textContent = '연합뉴스';

    this.title = createElement('a', { class: 'font-body-sm', href: '#'});
    this.title.textContent = 'WSJ "한국, 우크라 위해 포탄 이송…미국이 받아서 전달"';

    this.element.append(this.press, this.title);
  }
}
