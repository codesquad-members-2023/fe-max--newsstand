import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';

export default class GridView {
  public element;
  private table;
  private cells;
  private subscription;
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
    const leftArrowClass = this.page === 0 ? [style.left_arrow, 'no-display'] : style.left_arrow;
    this.leftArrow = createElement('a', { href: '#', class: leftArrowClass });
    this.leftArrow.append(leftArrowImg);

    const rightArrowImg = createElement('img', { src: 'assets/icons/right_arrow.svg'});
    const rightArrowClass = this.page === 3 ? [style.right_arrow, 'no-display'] : style.right_arrow;
    this.rightArrow = createElement('a', { href: '#', class: rightArrowClass});
    this.rightArrow.append(rightArrowImg);
    
    tbody.append(...rows);
    this.table.append(tbody);
    this.element.append(this.table, this.leftArrow, this.rightArrow);

    this.subscription = createElement('div', { class: style.subscription});
    const button = createElement('a', { href: '#', class: 'subscribe-button'});
    const plus = createElement('img', { src: 'assets/icons/plus-sm.svg', alt: ''});
    const text = document.createTextNode('');
    button.append(plus, text);
    this.subscription.append(button);

    this.setEvent();
  }

  setEvent() {
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

  updateProps({ gridInfo, subscriptionInfo }: { gridInfo: GridInfo; subscriptionInfo: number[] }) {
    const { imgs, page, isHover, hoverIndex } = gridInfo;

    if (this.page === page) {
      this.renderSubscriptionCover(isHover, hoverIndex, subscriptionInfo);
      return;
    }

    this.page = page;
    this.flipPage(imgs);
  }

  renderSubscriptionCover(isHover: boolean, hoverIndex: number, subscriptionInfo: number[]) {
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];
      if (isHover && hoverIndex === i) {
        const mediaLogo = cell.firstElementChild?.firstElementChild! as HTMLElement;
        const textNode = this.subscription.firstElementChild?.lastChild as HTMLElement;
        const subscriptionText = subscriptionInfo.includes(Number(mediaLogo.dataset.id))
          ? '해지하기'
          : '구독하기';
        if (textNode) {
          textNode.textContent = subscriptionText;
        }
        cell.append(this.subscription);
        continue;
      }
      if (cell.childElementCount > 1) {
        cell.removeChild(cell.lastElementChild!);
      }
    }
  }

  flipPage(imgs: GridImg[]) {
    const firstGridIndex = this.numberOfCells * this.page;
    const limitGridIndex = firstGridIndex + this.numberOfCells;

    imgs.slice(firstGridIndex, limitGridIndex).forEach((img, index) => {
      const mediaLogo = this.cells[index].firstElementChild?.firstElementChild!;
      mediaLogo.setAttribute('src', img.src);
      mediaLogo.setAttribute('alt', img.alt);
      mediaLogo.setAttribute('data-id', img.id.toString());
    });

    if (this.page === 0 && !this.leftArrow.classList.contains('no-display')) {
      this.leftArrow.classList.add('no-display');
    } else if (this.page !== 0 && this.leftArrow.classList.contains('no-display')) {
      this.leftArrow.classList.remove('no-display');
    }

    if (this.page === 3 && !this.rightArrow.classList.contains('no-display')) {
      this.rightArrow.classList.add('no-display');
    } else if (this.page !== 3 && this.rightArrow.classList.contains('no-display')) {
      this.rightArrow.classList.remove('no-display');
    }
  }
}
