import { createElement } from '../../utils/domUtils';
import style from './RollingNews.module.css';

type RollingNewsProps = {
  index: number;
  news: HeadlineNews[];
}

export default class RollingNews {
  public element;
  private press;
  private title;
  private props;

  constructor(props: RollingNewsProps) {
    this.element = createElement('article', { class: style.rolling_news });
    this.press = createElement('a', { class: 'font-title-sm', href: '#' });
    this.title = createElement('a', { class: 'font-body-sm', href: '#'});

    this.props = {
      index: props.index,
      news: [...props.news]
    }

    this.element.append(this.press, this.title);
  }

  updateProps(props: RollingNewsProps) {
    if (this.props.news[this.props.index] !== props.news[props.index]) {
      const newsData = props.news[props.index];

      this.press.textContent = newsData.media;
      this.press.setAttribute('href', newsData.mediaUrl);
      // if (this.press instanceof HTMLAnchorElement) {
      //   this.press.href = newsData.mediaUrl;
      // }

      this.title.textContent = newsData.news;
      if (this.title instanceof HTMLAnchorElement) {
        this.title.href = newsData.newsUrl;
      }
    }
  }
}
