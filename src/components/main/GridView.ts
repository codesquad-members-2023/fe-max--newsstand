import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';

export default class GridView {
  public element;
  private table;
  private cells;
  private subscriptionCover;
  private leftArrow;
  private rightArrow;
  private page: number;
  private numberOfCells: number;

  constructor({ gridInfo }: { gridInfo: GridInfo }) {
    this.element = createElement('section', { class: style.grid_view });
    this.table = createElement('table', { class: style.table});
    const tbody = createElement('tbody');
    
    const numberOfRows = 4;
    const numberOfCellsInRow = 6;
    this.numberOfCells = numberOfRows * numberOfCellsInRow;
    this.page = gridInfo.page;
    const firstGridIndex = this.numberOfCells * this.page;

    const rows = [...Array(numberOfRows)].map((_) => createElement('tr'));
    this.cells = gridInfo.imgs
      .slice(firstGridIndex, firstGridIndex + this.numberOfCells)
      .map((gridImg) => {
        const cell = createElement('td', { class: style.cell});
        const anchor = createElement('a', { href: '#', class: style.media_thumb});
        const img = createElement('img', {class: style.media_logo, src: gridImg.src, alt: gridImg.alt, 'data-id': gridImg.id.toString()});

        anchor.append(img);
        cell.append(anchor);
        return cell;
      });

    rows.forEach((row, index) => {
      const startIndex = index * numberOfCellsInRow;
      const limitIndex = (index + 1) * numberOfCellsInRow;
      for (let i = startIndex; i < limitIndex; i++) {
        row.append(this.cells[i]);
      }
    });

    const leftArrowImg = createElement('img', { src: 'assets/icons/left_arrow.svg'});
    this.leftArrow = createElement('a', { href: '#', class: style.left_arrow });
    this.leftArrow.append(leftArrowImg);

    const rightArrowImg = createElement('img', { src: 'assets/icons/right_arrow.svg'});
    this.rightArrow = createElement('a', { href: '#', class: style.right_arrow});
    this.rightArrow.append(rightArrowImg);

    this.leftArrow.classList.toggle('no-display', this.page === 0);
    this.rightArrow.classList.toggle('no-display', this.page === 3);
    
    tbody.append(...rows);
    this.table.append(tbody);
    this.element.append(this.table, this.leftArrow, this.rightArrow);

    this.subscriptionCover = createElement('div', { class: style.subscription});
    const button = createElement('a', { href: '#', class: 'subscribe-button'});
    const plus = createElement('img', { src: 'assets/icons/plus-sm.svg', alt: ''});
    const text = document.createTextNode('');
    button.append(plus, text);
    this.subscriptionCover.append(button);

    this.setEvent();
  }

  private setEvent() {
    this.cells.forEach((cell, index) => {
      cell.addEventListener('mouseenter', () => {
        invoke({
          type: 'turnOnSubscriptionCover',
          payload: {
            hoverOnGrid: true,
            hoveredCellIndex: index
          }
        }, this);
      });
    });

    this.table.addEventListener('mouseleave', () => {
      invoke({
        type: 'turnOffSubscriptionCover',
        payload: {
          hoverOnGrid: false
        }
      }, this);
    });

    this.leftArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToPrevGridPage'
      }, this);
    });

    this.rightArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToNextGridPage'
      }, this);
    });
  }

  updateProps({ gridInfo, subscriptionInfo }: { gridInfo: GridInfo; subscriptionInfo: number[] }) {
    const { imgs, page, isHover, hoverIndex } = gridInfo;

    if (this.page === page) {
      this.renderSubscriptionCover(isHover, hoverIndex, subscriptionInfo);
      return;
    }

    this.page = page;
    this.flipPage(imgs);
  }

  private renderSubscriptionCover(isHover: boolean, hoverIndex: number, subscriptionInfo: number[]) {
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];
      if (isHover && hoverIndex === i) {
        const mediaLogo = cell.querySelector(`.${style.media_logo}`);
        const textNode = this.subscriptionCover.querySelector('.subscribe-button')?.lastChild;
        if (mediaLogo instanceof HTMLElement && textNode) {
          textNode.textContent = subscriptionInfo.includes(Number(mediaLogo.dataset.id))
            ? '해지하기'
            : '구독하기';
          cell.append(this.subscriptionCover);
        }
        continue;
      }
      if (cell.childElementCount > 1) {
        cell.lastElementChild?.remove();
      }
    }
  }

  private flipPage(imgs: GridImg[]) {
    const firstGridIndex = this.numberOfCells * this.page;
    const limitGridIndex = firstGridIndex + this.numberOfCells;

    imgs.slice(firstGridIndex, limitGridIndex).forEach((img, index) => {
      const mediaLogo = this.cells[index].querySelector(`.${style.media_logo}`);
      if (mediaLogo === null) {
        return;
      }
      mediaLogo.setAttribute('src', img.src);
      mediaLogo.setAttribute('alt', img.alt);
      mediaLogo.setAttribute('data-id', img.id.toString());
    });

    this.leftArrow.classList.toggle('no-display', this.page === 0);
    this.rightArrow.classList.toggle('no-display', this.page === 3);
  }
}
