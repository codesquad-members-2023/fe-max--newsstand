import { Component } from '../../Component';

export class GridView extends Component {
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor(props) {
    super(props);
    this.render();
    this.setEvent();
    this.mount();
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');

    this.renderNewsGrid();
    this.renderPressLogo();
  }

  mount() {
    this.element.append(...this.gridItems);
  }

  update(newState) {
    if (newState.currentPageIdx === this.props.currentPageIdx) {
      return;
    }

    if (newState.currentPageIdx !== this.props.currentPageIdx) {
      this.props = newState;
      this.renderPressLogo();
    }
  }

  renderNewsGrid() {
    this.gridItems = [];
    const cellNum = 24;

    for (let i = 0; i < cellNum; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const logoImg = document.createElement('img');
      logoImg.classList.add('press-logo');

      gridItem.append(logoImg);
      this.gridItems.push(gridItem);
    }
  }

  renderPressLogo() {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      const imgIdx = idx + (this.props.currentPageIdx - 1) * 24;
      itemImg.src = this.props.gridData[imgIdx]?.logoURL || '';
      itemImg.alt = this.props.gridData[imgIdx]?.name || '';
    });
  }

  // setEvent() {
  //   this.gridItems.forEach((item) => {
  //     item.addEventListener('mouseenter', (e) => {
  //       Actions.handleSubBtn(e.target, 'show');
  //     });
  //   });
  //   this.gridItems.forEach((item) => {
  //     item.addEventListener('mouseleave', (e) => {
  //       Actions.handleSubBtn(e.target, 'hide');
  //     });
  //   });
  // }

  // showSubBtn({ targetCell }) {
  //   const gridCell = targetCell;

  //   const subBtn = document.createElement('button');
  //   subBtn.classList.add('sub-btn');

  //   const subBtnIcon = document.createElement('img');
  //   subBtnIcon.classList.add('sub-btn__icon');
  //   subBtnIcon.setAttribute('src', '/src/assets/plus.svg');

  //   const subBtnLabel = document.createElement('span');
  //   subBtnLabel.classList.add('sub-btn__label');
  //   subBtnLabel.textContent = '구독하기';

  //   subBtn.append(subBtnIcon, subBtnLabel);

  //   gridCell.children[0].classList.add('hide');
  //   gridCell.append(subBtn);
  // }

  // hideSubBtn({ targetCell }) {
  //   const gridCell = targetCell;
  //   const subBtn = gridCell.querySelector('.sub-btn');
  //   gridCell.removeChild(subBtn);
  //   gridCell.children[0].classList.remove('hide');
  // }
}
