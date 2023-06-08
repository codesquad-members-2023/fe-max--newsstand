import { GridNewsData, HTMLElementEvent } from '../utils/types';
import { GridState } from '../store/GridStore';
import { Actions } from '../flux/Actions';

export class GridView {
  element: HTMLElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor(props: GridState) {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');

    const leftBtn = document.createElement('button');
    this.leftBtn = leftBtn;
    leftBtn.classList.add('btn', 'btn--left', 'hide');

    const rightBtn = document.createElement('button');
    this.rightBtn = rightBtn;
    rightBtn.classList.add('btn', 'btn--right');

    this.gridItems = [];
    const cellNum = 24;
    for (let i = 0; i < cellNum; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const logoImg = document.createElement('img');
      logoImg.classList.add('press-logo');

      gridItem.append(logoImg);
      this.element.append(gridItem);

      this.gridItems.push(gridItem);
    }

    this.render(props);
    this.setEvent();
  }

  update(state: GridState) {
    if (state.currentPage === 1) {
      this.render(state);
      this.leftBtn.classList.add('hide');
    } else if (state.currentPage === 4) {
      this.render(state);
      this.rightBtn.classList.add('hide');
    } else {
      this.render(state);
      this.leftBtn.classList.remove('hide');
      this.rightBtn.classList.remove('hide');
    }
  }

  render(state: GridState) {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      const imgIdx = idx + (state.currentPage - 1) * 24;
      itemImg.src = state.newsData[imgIdx] ? state.newsData[imgIdx].logoURL : '';
      itemImg.alt = state.newsData[imgIdx] ? state.newsData[imgIdx].name : '';
    });
  }

  // firstRender(startIdx: number) {
  //   this.gridItems.forEach((item, idx) => {
  //     const itemImg = item.children[0] as HTMLImageElement;
  //     const imgIdx = idx + startIdx;
  //     itemImg.src = this.props[imgIdx] ? this.props[imgIdx].logoURL : '';
  //     itemImg.alt = this.props[imgIdx] ? this.props[imgIdx].name : '';
  //   });
  // }

  setEvent() {
    this.rightBtn.addEventListener('click', () => {
      Actions.clickArrowBtn('right');
    });
    this.leftBtn.addEventListener('click', () => {
      Actions.clickArrowBtn('left');
    });
    this.gridItems.forEach((item) => {
      item.addEventListener('mouseenter', this.showSubBtn.bind(this));
    });
    this.gridItems.forEach((item) => {
      item.addEventListener('mouseleave', this.hideSubBtn.bind(this));
    });
  }

  showSubBtn(e: HTMLElementEvent<HTMLDivElement>) {
    const gridCell = e.target;

    const subBtn = document.createElement('button');
    subBtn.classList.add('sub-btn');

    const subBtnIcon = document.createElement('img');
    subBtnIcon.classList.add('sub-btn__icon');
    subBtnIcon.setAttribute('src', '/src/assets/plus.svg');

    const subBtnLabel = document.createElement('span');
    subBtnLabel.classList.add('sub-btn__label');
    subBtnLabel.textContent = '구독하기';

    subBtn.append(subBtnIcon, subBtnLabel);

    gridCell.children[0].classList.add('hide');
    gridCell.append(subBtn);
  }

  hideSubBtn(e: HTMLElementEvent<HTMLDivElement>) {
    const gridCell = e.target;
    const subBtn = gridCell.querySelector('.sub-btn');
    gridCell.removeChild(subBtn);
    gridCell.children[0].classList.remove('hide');
  }
}
