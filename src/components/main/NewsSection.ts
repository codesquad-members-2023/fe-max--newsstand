import { createElement } from '../../utils/domUtils';
import style from './ListView.module.css';

export class NewsSection {
  public readonly element;
  private thumbnailWrapper;
  private thumbnail;
  private subNewsItems;
  private caption;

  constructor() {
    const newsSection = createElement('section', { class: style.news_section });

    const mainNews = createElement('div', { class: style.main_news });
    const thumbnailWrapper = createElement('a', { href: '' });
    const thumbnail = createElement('img', { class: style.thumbnail });
    const mainTitle = createElement('a', { href: '', class: [style.main_title, 'font-body-md'] });
    thumbnailWrapper.append(thumbnail);
    mainNews.append(thumbnailWrapper, mainTitle);

    const subNews = createElement('div', { class: style.sub_news });
    const subNewsContainer = createElement('ul', { class: style.sub_news__container });
    const subNewsItems = Array.from(Array(6)).map(() => {
      const wrapper = createElement('li', { class: [style.sub_news__item, 'font-body-md'] });
      const item = createElement('a', { href: '' });

      wrapper.append(item);

      return wrapper;
    });
    const caption = createElement('li', { class: [style.sub_news__caption, 'font-body-sm'] });

    subNewsContainer.append(...subNewsItems, caption);
    subNews.append(subNewsContainer);

    newsSection.append(mainNews, subNews);

    this.element = newsSection;
    this.thumbnailWrapper = thumbnailWrapper;
    this.thumbnail = thumbnail;
    this.subNewsItems = subNewsItems;
    this.caption = caption;
  }

  updateView(props: NewsData) {}
}
