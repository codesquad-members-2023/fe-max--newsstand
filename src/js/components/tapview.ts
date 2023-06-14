import { createElement } from '../utils.ts';
import { setGridViewAction, setListViewAction, selectAllPressAction, selectSubscribePressAction } from '../action.ts';
import { store } from '../store/store.ts';

export class Tapview {
  private element: HTMLElement;
  private newsMain: HTMLElement;
  private allBtn: HTMLElement;
  private subscribeBtn: HTMLElement;
  private listImg: HTMLElement;
  private gridImg: HTMLElement;

  constructor() {
    this.element = createElement('div', { class: 'tap-view' });
    this.allBtn = createElement('button', { class: 'tap-btns__all' });
    this.subscribeBtn = createElement('button', { class: 'tap-btns__subscribe' });
    this.listImg = createElement('img', { src: './src/asset/icon/name=list-view.svg' });
    this.gridImg = createElement('img', { src: './src/asset/icon/name=grid-view-active.svg' });
    this.newsMain = createElement('section', { class: 'news-main' });
    this.setEvent();
  }

  render() {
    const main = document.querySelector('.main');

    this.element.append(this.createTapBtns(), this.createViewBtns());
    this.newsMain.append(this.element);
    main?.append(this.newsMain);
    this.update();
  }

  update() {
    const state = store.getState();
    state.isAllPress ? this.selectAllPress() : this.selectSubscribe();
    if (state.isGrid) {
      this.gridImg.setAttribute('src', './src/asset/icon/name=grid-view-active.svg');
      this.listImg.setAttribute('src', './src/asset/icon/name=list-view.svg');
    } else {
      this.gridImg.setAttribute('src', './src/asset/icon/name=grid-view.svg');
      this.listImg.setAttribute('src', './src/asset/icon/name=list-view-active.svg');
    }
  }

  selectAllPress() {
    this.allBtn.classList.add('tap-active');
    this.subscribeBtn.classList.remove('tap-active');
  }

  selectSubscribe() {
    this.subscribeBtn.classList.add('tap-active');
    this.allBtn.classList.remove('tap-active');
  }

  createTapBtns() {
    const tapBtnWrap = createElement('div', { class: 'tap-btns' });

    this.allBtn.textContent = '전체 언론사';
    this.subscribeBtn.textContent = '내가 구독한 언론사';
    tapBtnWrap.append(this.allBtn, this.subscribeBtn);

    return tapBtnWrap;
  }

  createViewBtns() {
    const viewBtnWrap = createElement('div', { class: 'view-btns' });
    const listBtn = createElement('button', { class: 'view-btns__list' });
    const gridBtn = createElement('button', { class: 'view-btns__grid' });
    listBtn.append(this.listImg);
    gridBtn.append(this.gridImg);
    viewBtnWrap.append(listBtn, gridBtn);

    return viewBtnWrap;
  }

  setEvent() {
    store.subscribe(this.update.bind(this));
    this.gridImg.addEventListener('click', () => {
      if (store.getState().isGrid === false) store.dispatch(setGridViewAction);
    });
    this.listImg.addEventListener('click', () => {
      if (store.getState().isGrid === true) store.dispatch(setListViewAction);
    });
    this.allBtn.addEventListener('click', () => {
      if (store.getState().isAllPress === false) store.dispatch(selectAllPressAction);
    });
    this.subscribeBtn.addEventListener('click', () => {
      if (store.getState().isAllPress === true) store.dispatch(selectSubscribePressAction);
    });
  }
}
