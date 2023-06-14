import { createElement } from '../utils.ts';
import { FIRST_GRID_PAGE, LAST_GRID_PAGE } from '../constant.ts';
import { MainContentsProps } from '../type.ts';
import { GridView } from './gridView/gridView.ts';
import { ListView } from './listView/listView.ts';
import { store } from '../store/store.ts';
import { nextGridPageAction, prevGridPageAction } from '../action.ts';

const MainContentsProps = {
  prevBtnImg: './src/asset/icon/LeftButton.svg',
  nextBtnImg: './src/asset/icon/RightButton.svg',
};

export class MainContents {
  private props: MainContentsProps;
  private element: HTMLElement;
  private mainWrap: HTMLElement;
  private prevBtn: HTMLElement;
  private nextBtn: HTMLElement;
  private prevBtnImg: HTMLElement;
  private nextBtnImg: HTMLElement;
  private gridView;
  private listView;

  constructor() {
    this.props = MainContentsProps;
    this.element = createElement('div', { class: 'main-contents' });
    this.mainWrap = createElement('div', { class: 'main-wrap' });
    this.prevBtn = createElement('button', { class: 'main-contents__prev' });
    this.nextBtn = createElement('button', { class: 'main-contents__next' });
    this.prevBtnImg = createElement('img', { class: 'hidden', src: `${this.props.prevBtnImg}` });
    this.nextBtnImg = createElement('img', { class: 'hidden', src: `${this.props.nextBtnImg}` });
    this.gridView = new GridView();
    this.listView = new ListView();
    this.setEvent();
  }

  init() {
    const newsMain = document.querySelector('.news-main');
    this.element.append(this.createPrevBtn(), this.createNextBtn(), this.mainWrap);
    newsMain?.append(this.element);
    this.render();
  }

  render() {
    this.mainWrap.innerHTML = '';
    const state = store.getState();
    state.isGrid ? this.updateGridView() : this.updateListView();
  }

  updateGridView() {
    const state = store.getState();
    this.gridView.render();
    this.prevBtnImg.classList.toggle('hidden', state.pageIndex === FIRST_GRID_PAGE);
    this.nextBtnImg.classList.toggle('hidden', state.pageIndex === LAST_GRID_PAGE);
  }

  updateListView() {
    this.listView.render();
    this.prevBtnImg.classList.remove('hidden');
    this.nextBtnImg.classList.remove('hidden');
  }

  createPrevBtn() {
    this.prevBtn.append(this.prevBtnImg);
    return this.prevBtn;
  }

  createNextBtn() {
    this.nextBtn.append(this.nextBtnImg);
    return this.nextBtn;
  }

  setEvent() {
    store.subscribe(this.render.bind(this));
    this.prevBtn.addEventListener('click', () => {
      const state = store.getState();
      if (state.pageIndex === FIRST_GRID_PAGE) return;
      store.dispatch(prevGridPageAction);
    });

    this.nextBtn.addEventListener('click', () => {
      const state = store.getState();
      if (state.pageIndex === LAST_GRID_PAGE) return;
      store.dispatch(nextGridPageAction);
    });
  }
}
