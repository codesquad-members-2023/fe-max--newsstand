import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';

type GridViewProps = {
  gridInfo: GridInfo;
  subscriptionInfo: number[];
};

export default class GridView {
  public element;
  private table;
  private cells;
  private subscriptionCover;
  private leftArrow;
  private rightArrow;
  private numberOfCells = 24;
  private props;

  constructor(props: GridViewProps) {
    this.element = createElement('section', { class: style.grid_view });
    this.cells = this.createCells();
    this.table = this.createTable();
    this.leftArrow = this.createArrow('left');
    this.rightArrow = this.createArrow('right');
    this.subscriptionCover = this.createSubscriptionCover();
    
    this.element.append(this.table, this.leftArrow, this.rightArrow);

    this.props = this.updateProps(props);
    this.updateView(props);
    this.setEvent();
  }

  private createCells() {
    return [...Array(this.numberOfCells)].map(() => {
      const cell = createElement('td', { class: style.cell });
      const anchor = createElement('a', { href: '#', class: style.media_thumb });
      const img = createElement('img', { class: style.media_logo });
  
      anchor.append(img);
      cell.append(anchor);
  
      return cell;
    })
  }

  private createTable() {
    const table = createElement('table', { class: style.table });
    const tbody = this.createTableBody();

    table.append(tbody);

    return table;
  }

  private createTableBody() {
    const numberOfRows = 4;
    const numberOfCellsInRow = Math.floor(this.numberOfCells / numberOfRows);

    const tbody = createElement('tbody');
    const rows = [...Array(numberOfRows)].map((_, index) => {
      const row = createElement('tr');
      const startIndex = index * numberOfCellsInRow;
      const limitIndex = (index + 1) * numberOfCellsInRow;

      row.append(...this.cells.slice(startIndex, limitIndex));

      return row;
    });

    tbody.append(...rows);

    return tbody;
  }

  private createArrow(direction: string) {
    const imagePath = `assets/icons/${direction}_arrow.svg`;
    const arrow = createElement('a', { href: '#', class: style[`${direction}_arrow`] });
    const arrowImg = createElement('img', { src: imagePath });

    arrow.append(arrowImg);

    return arrow;
  }

  private createSubscriptionCover() {
    const cover = createElement('div', { class: style.subscription });
    const button = createElement('a', { href: '#', class: 'subscribe-button' });
    const plus = createElement('img', { src: 'assets/icons/plus-sm.svg', alt: '' });
    const text = document.createTextNode('');

    button.append(plus, text);
    cover.append(button);

    return cover;
  }

  private updateProps(props: GridViewProps) {
    return {
      imgs: [...props.gridInfo.imgs],
      page: props.gridInfo.page,
      isHover: props.gridInfo.isHover,
      hoverIndex: props.gridInfo.hoverIndex
    };
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
        });
      });
    });

    this.table.addEventListener('mouseleave', () => {
      invoke({
        type: 'turnOffSubscriptionCover',
        payload: {
          hoverOnGrid: false
        }
      });
    });

    this.leftArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToPrevGridPage'
      });
    });

    this.rightArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToNextGridPage'
      });
    });
  }

  updateView(props: GridViewProps) {
    const { imgs, page, isHover, hoverIndex } = props.gridInfo;
    if (this.props.isHover !== isHover || this.props.hoverIndex !== hoverIndex) {
      this.renderSubscriptionCover(isHover, hoverIndex, props.subscriptionInfo);
    }

    if (this.props.page !== page || this.props.imgs.length !== imgs.length) {
      this.renderCurrentPage(imgs, page);
    }

    this.props = this.updateProps(props);
  }

  private renderSubscriptionCover(
    isHover: boolean,
    hoverIndex: number,
    subscriptionInfo: number[]
  ) {
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];
      if (isHover && hoverIndex === i) {
        const mediaLogo = cell.querySelector(`.${style.media_logo}`);
        const textNode = this.subscriptionCover.querySelector('.subscribe-button')?.lastChild;
        if (mediaLogo instanceof HTMLElement && mediaLogo.dataset.id && textNode) {
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

  private renderCurrentPage(imgs: GridImg[], page: number) {
    const firstGridIndex = this.numberOfCells * page;
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

    this.leftArrow.classList.toggle('no-display', page === 0);
    this.rightArrow.classList.toggle('no-display', page === 3);
  }
}
