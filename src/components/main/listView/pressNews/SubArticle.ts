import { createElement } from '@utils/domUtils';
import style from '@components/main/listView/ListView.module.css';

export default class SubArticle {
  public readonly element = createElement('div', { class: style.sub_article });
  private articleContainer = createElement('ul', { class: style.sub_article__container });
  private articleCount = 6;
  private articleWrappers = Array.from({ length: this.articleCount }, () =>
    createElement('li', { class: [style.sub_article__wrapper, 'font-body-md'] })
  );
  private articleList = Array.from({ length: this.articleCount }, () =>
    createElement('a', { href: '', class: style.sub_title })
  );
  private caption = createElement('li', { class: [style.sub_caption, 'font-body-sm'] });

  constructor() {
    this.articleWrappers.forEach((wrapper, index) => {
      wrapper.append(this.articleList[index]!);
    });
    this.articleContainer.append(...this.articleWrappers);
    this.element.append(this.articleContainer);
  }

  updateView(props: NewsData) {
    this.articleList.map((link, index) => {
      const article = props.subContent[index];
      if (article) {
        link.setAttribute('href', article.url);
        link.textContent = article.title;
      }
      return link;
    });
    this.caption.textContent = `${props.mediaInfo.imgAlt} 언론사에서 직접 편집한 뉴스입니다.`;
  }
}
