import { createElement } from '@utils/domUtils';
import style from '@components/main/listView/ListView.module.css';

export default class MainArticle {
  public readonly element = createElement('div', { class: style.main_article });
  private thumbnailWrapper = createElement('a', { href: '' });
  private thumbnail = createElement('img', { class: style.thumbnail });
  private mainTitle = createElement('a', { href: '', class: [style.main_title, 'font-body-md'] });

  constructor() {
    this.thumbnailWrapper.append(this.thumbnail);
    this.element.append(this.thumbnailWrapper, this.mainTitle);
  }

  updateView(props: NewsData) {
    this.thumbnailWrapper.setAttribute('href', props.mainContent.url);
    this.thumbnail.setAttribute('src', props.mainContent.imgSrc);
    this.thumbnail.setAttribute('alt', props.mainContent.imgAlt);
    this.mainTitle.textContent = props.mainContent.imgAlt;
  }
}
