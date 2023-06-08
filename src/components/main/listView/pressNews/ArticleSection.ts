import { createElement } from '../../../../utils/domUtils';
import { MainArticle } from './MainArticle';
import { SubArticle } from './SubArticle';
import style from '../ListView.module.css';

export class ArticleSection {
  public readonly element = createElement('section', { class: style.news_section });
  private mainArticle = new MainArticle();
  private subArticle = new SubArticle();

  constructor() {
    this.element.append(this.mainArticle.element, this.subArticle.element);
  }

  updateView(props: NewsData) {
    this.mainArticle.updateView(props);
    this.subArticle.updateView(props);
  }
}
