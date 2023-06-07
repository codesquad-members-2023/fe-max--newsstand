import { createElement } from '../utils.ts';
import { HeaderProps } from '../type.ts';

export class Header {
  private props: HeaderProps;
  private element: HTMLElement;

  constructor(props: HeaderProps) {
    this.props = props;
    this.element = createElement('header', { class: 'header' });
    this.render();
  }

  render() {
    const app = document.querySelector('.app');

    this.element.append(this.createTitle(), this.createDate());
    app?.append(this.element);
  }

  createTitle() {
    const titleWrap = createElement('a', { class: 'header-title', href: 'index.html' });
    const titleImg = createElement('img', { class: 'header-title__img', src: './src/asset/icon/name=newspaper.svg' });
    const title = createElement('h1', { class: 'header-title__text' });

    title.textContent = this.props.title;
    titleWrap.append(titleImg, title);

    return titleWrap;
  }

  createDate() {
    const date = createElement('span', { class: 'header-date' });
    date.textContent = this.props.date;

    return date;
  }
}
