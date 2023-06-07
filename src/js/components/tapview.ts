import { createElement } from '../utils.ts';
import { TapviewProps } from '../type.ts';

export class Tapview {
  private props: TapviewProps;
  private element: HTMLElement;
  private newsMain: HTMLElement;

  constructor(props: TapviewProps) {
    this.props = props;
    this.element = createElement('div', { class: 'tap-view' });
    this.newsMain = createElement('section', { class: 'news-main' });
    this.render();
  }

  render() {
    const main = document.querySelector('.main');

    this.element.append(this.createTapBtns());
    this.element.append(this.createViewBtns());
    this.newsMain.append(this.element);
    main?.append(this.newsMain);
  }

  createTapBtns() {
    const tapBtnWrap = createElement('div', { class: 'tap-btns' });
    const allBtn = createElement('button', { class: 'tap-btns__all' });
    const subscribeBtn = createElement('button', { class: 'tap-btns__subscribe' });

    allBtn.textContent = this.props.allBtn;
    subscribeBtn.textContent = this.props.subscribeBtn;
    tapBtnWrap.append(allBtn, subscribeBtn);

    return tapBtnWrap;
  }

  createViewBtns() {
    const viewBtnWrap = createElement('div', { class: 'view-btns' });
    const listBtn = createElement('button', { class: 'view-btns__list' });
    const gridBtn = createElement('button', { class: 'view-btns__grid' });
    const listImg = createElement('img', { src: './src/asset/icon/name=list-view.svg' });
    const gridImg = createElement('img', { src: './src/asset/icon/name=grid-view-active.svg' });
    listBtn.append(listImg);
    gridBtn.append(gridImg);
    viewBtnWrap.append(listBtn, gridBtn);

    return viewBtnWrap;
  }
}
