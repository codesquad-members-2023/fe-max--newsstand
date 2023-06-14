import fetchedData from '../../../db.json';
import { createElement } from '../utils.ts';
import { RollingNewsProps } from '../type.ts';

const RollingNewsProps = {
  headline: fetchedData.headline,
  leftIndex: 0,
  rightIndex: 0,
};

export class RollingNews {
  private props: RollingNewsProps;
  private element: HTMLElement;
  private leftPress: HTMLElement;
  private leftArticle: HTMLElement;
  private rightPress: HTMLElement;
  private rightArticle: HTMLElement;
  private leftList: { press: string; title: string; url: string }[];
  private rightList: { press: string; title: string; url: string }[];

  constructor() {
    this.props = RollingNewsProps;
    this.element = createElement('main', { class: 'main' });
    this.leftPress = createElement('a', { class: 'news-bar__press', href: '#' });
    this.leftArticle = createElement('a', { class: 'news-bar__article', href: '#' });
    this.rightPress = createElement('a', { class: 'news-bar__press', href: '#' });
    this.rightArticle = createElement('a', { class: 'news-bar__article', href: '#' });
    this.leftList = this.props.headline.filter((_, index) => index % 2 === 0);
    this.rightList = this.props.headline.filter((_, index) => index % 2 === 1);
  }

  render() {
    console.log(fetchedData.newsList['종합/경제'][0].mainArticle.thumbnailSrc);
    const app = document.querySelector('.app');
    const rollingNewsWrap = createElement('section', { class: 'rolling-news' });

    rollingNewsWrap.append(this.createLeftRolling(), this.createRightRolling());
    this.element.append(rollingNewsWrap);
    app?.append(this.element);
  }

  createLeftRolling(): HTMLElement {
    const rollingNews = createElement('div', { class: 'news-bar' });
    rollingNews.append(this.leftPress, this.leftArticle);

    return rollingNews;
  }

  createRightRolling(): HTMLElement {
    const rollingNews = createElement('div', { class: 'news-bar' });
    rollingNews.append(this.rightPress, this.rightArticle);

    return rollingNews;
  }

  setAutoRolling() {
    this.setLeftRolling();
    this.setRightRolling();

    setInterval(() => {
      this.props.leftIndex = (this.props.leftIndex + 1) % this.leftList.length;
      this.setLeftRolling();
    }, 5000);

    setInterval(() => {
      this.props.rightIndex = (this.props.rightIndex + 1) % this.rightList.length;
      setTimeout(() => {
        this.setRightRolling();
      }, 1000);
    }, 5000);
  }

  setLeftRolling() {
    this.leftPress.textContent = this.leftList[this.props.leftIndex].press;
    this.leftArticle.textContent = this.leftList[this.props.leftIndex].title;
    this.leftArticle.setAttribute('href', this.leftList[this.props.leftIndex].url);
  }

  setRightRolling() {
    this.rightPress.textContent = this.rightList[this.props.rightIndex].press;
    this.rightArticle.textContent = this.rightList[this.props.rightIndex].title;
    this.rightArticle.setAttribute('href', this.rightList[this.props.rightIndex].url);
  }
}
