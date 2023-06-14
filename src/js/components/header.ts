import { createElement } from '../utils.ts';
import { store } from '../store/store.ts';

export class Header {
  private app: HTMLElement;
  private element: HTMLElement;

  constructor() {
    this.app = document.querySelector('.app')!;
    this.element = createElement('header', { class: 'header' });
  }

  render() {
    this.element.append(this.createTitle(), this.createDate());
    this.app.append(this.element);
  }

  createTitle() {
    const titleWrap = createElement('a', { class: 'header-title', href: 'index.html' });
    const titleImg = createElement('img', { class: 'header-title__img', src: './src/asset/icon/name=newspaper.svg' });
    const title = createElement('h1', { class: 'header-title__text' });

    title.textContent = '뉴스스탠드';
    titleWrap.append(titleImg, title);

    return titleWrap;
  }

  createDate() {
    const date = createElement('span', { class: 'header-date' });
    const state = store.getState();
    date.textContent = state.date;

    return date;
  }
}
