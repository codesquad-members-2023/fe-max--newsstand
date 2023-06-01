import { GridNewsData } from '../types';

export class GridView {
  state: {
    currentPage: number;
  };
  props: GridNewsData[];
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

    this.onStateChanged();
    this.setEvent();
  }

  onStateChanged() {
    switch (this.state.currentPage) {
      case 1:
        this.renderLogo(0);
        this.leftBtn.classList.add('hide');
        break;
      case 2:
        this.renderLogo(24);
        this.leftBtn.classList.remove('hide');
        break;
      case 3:
        this.renderLogo(48);
        this.rightBtn.classList.remove('hide');
        break;
      case 4:
        this.renderLogo(72);
        this.rightBtn.classList.add('hide');
        break;
      default:
        console.log('There is no page');
    }
  }

  renderLogo(startIdx) {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      const imgIdx = idx + startIdx;
      itemImg.src = this.props[imgIdx] ? this.props[imgIdx].logoURL : '';
      itemImg.alt = this.props[imgIdx] ? this.props[imgIdx].name : '';
    });
  }

  setEvent() {
    this.leftBtn.addEventListener('click', this.showPrevPage.bind(this));
    this.rightBtn.addEventListener('click', this.showNextPage.bind(this));
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
}
