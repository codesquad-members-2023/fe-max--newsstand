import { GridNewsData, HTMLElementEvent } from '../types';
import { Actions } from '../Actions';

export class GridView {
  private state: {
    currentPage: number;
  };
  readonly props: GridNewsData[];
  element: HTMLElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor(props: GridNewsData[]) {
    this.state = {
      currentPage: 1,
    };
    this.props = props;
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

    this.render(0);
    this.setEvent();
  }

  update(state) {
    switch (state.currentPage) {
      case 1:
        this.render(0);
        this.leftBtn.classList.add('hide');
        break;
      case 2:
        this.render(24);
        this.leftBtn.classList.remove('hide');
        break;
      case 3:
        this.render(48);
        this.rightBtn.classList.remove('hide');
        break;
      case 4:
        this.render(72);
        this.rightBtn.classList.add('hide');
        break;
      default:
        console.log('There is no page');
    }
  }

  render(startIdx: number) {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      const imgIdx = idx + startIdx;
      itemImg.src = this.props[imgIdx] ? this.props[imgIdx].logoURL : '';
      itemImg.alt = this.props[imgIdx] ? this.props[imgIdx].name : '';
    });
  }

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

  showNextPage() {
    if (this.state.currentPage === 4) {
      this.state.currentPage = 1;
      this.onStateChanged();
      return;
    }

    this.state.currentPage += 1;
    this.onStateChanged();
  }

  showPrevPage() {
    if (this.state.currentPage === 1) {
      this.state.currentPage = 4;
      this.onStateChanged();
      return;
    }

    this.state.currentPage -= 1;
    this.onStateChanged();
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
