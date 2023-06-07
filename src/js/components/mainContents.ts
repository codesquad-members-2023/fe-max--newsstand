import { createElement } from '../utils.ts';
import { MainContentsProps } from '../type.ts';
import { Action } from '../type.ts';

const nextGridPageAction: Action = { type: 'NEXT_GRID_PAGE' };
const prevGridPageAction: Action = { type: 'PREV_GRID_PAGE' };

export class MainContents {
  private props: MainContentsProps;
  private element: HTMLElement;
  private prevBtn: HTMLElement;
  private nextBtn: HTMLElement;

  constructor(props: MainContentsProps) {
    this.props = props;
    this.element = createElement('div', { class: 'main-contents' });
    this.prevBtn = createElement('button', { class: 'main-contents__prev' });
    this.nextBtn = createElement('button', { class: 'main-contents__next' });
    this.render();
    this.setEvent();
  }

  render() {
    const newsMain = document.querySelector('.news-main');
    this.element.append(this.createPrevBtn(), this.createNextBtn());
    newsMain?.append(this.element);
  }

  createPrevBtn() {
    const prevBtnImg = createElement('img', { src: `${this.props.prevBtnImg}` });

    this.prevBtn.append(prevBtnImg);
    return this.prevBtn;
  }

  createNextBtn() {
    const nextBtnImg = createElement('img', { src: `${this.props.nextBtnImg}` });

    this.nextBtn.append(nextBtnImg);
    return this.nextBtn;
  }

  setEvent() {
    this.prevBtn.addEventListener('click', () => {
      // dispatch(prevGridPageAction);
    });

    this.nextBtn.addEventListener('click', () => {
      // dispatch(nextGridPageAction);
    });
  }
}
