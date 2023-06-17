import { createElement } from '@utils/domUtils';
import MainArticle from '@components/main/listView/pressNews/MainArticle';
import SubArticle from '@components/main/listView/pressNews/SubArticle';
import style from '@components/main/listView/ListView.module.css';

export default class ArticleSection {
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
