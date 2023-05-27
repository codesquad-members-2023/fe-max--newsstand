import { invoke } from '../../main';
import style from './GridView.module.css';

export default class GridView {
  public element: HTMLElement;
  private table: HTMLTableElement;
  private tbody: HTMLTableSectionElement;
  private rows: HTMLTableRowElement[];
  private cells: HTMLTableCellElement[];
  private subscription: HTMLDivElement;
  private leftArrow: HTMLAnchorElement;
  private rightArrow: HTMLAnchorElement;
  private page: number;
  private numbers: {
    rows: number;
    cellsInRow: number;
  };

  constructor({ gridInfo }: { gridInfo: GridInfo }) {
    this.element = document.createElement('section');
    this.element.classList.add(style.grid_view);

    this.table = document.createElement('table');
    this.table.classList.add(style.table);

    this.tbody = document.createElement('tbody');

    this.numbers = {
      rows: 4,
      cellsInRow: 6
    };

    this.rows = [...Array(this.numbers.rows)].map((_) => document.createElement('tr'));

    const numberOfCells = this.numbers.rows * this.numbers.cellsInRow;
    this.page = gridInfo.page;
    const firstGridIndex = numberOfCells * this.page;

    this.cells = gridInfo.imgs
      .slice(firstGridIndex, firstGridIndex + numberOfCells)
      .map((gridImg) => {
        const cell = document.createElement('td');
        cell.classList.add(style.cell);

        const anchor = document.createElement('a');
        anchor.href = '#';
        anchor.classList.add(style.media_thumb);

        const img = document.createElement('img');
        img.classList.add(style.media_logo);
        Object.assign(img, { src: gridImg.src, alt: gridImg.alt });
        img.dataset.id = gridImg.id.toString();

        anchor.append(img);
        cell.append(anchor);

        return cell;
      });

    this.subscription = document.createElement('div');
    this.subscription.classList.add(style.subscription);

    const button = document.createElement('a');
    button.href = '#';
    button.classList.add('subscribe-button');
    button.textContent = '구독하기';

    const plus = document.createElement('img');
    plus.src = 'assets/icons/plus-sm.svg';
    plus.alt = '';

    button.insertAdjacentElement('afterbegin', plus);
    this.subscription.append(button);

    this.rows.forEach((row, index) => {
      const startIndex = index * this.numbers.cellsInRow;
      const limitIndex = (index + 1) * this.numbers.cellsInRow;
      for (let i = startIndex; i < limitIndex; i++) {
        row.append(this.cells[i]);
      }
    });

    this.leftArrow = document.createElement('a');
    this.leftArrow.href = '#';
    this.leftArrow.classList.add(style.left_arrow);
    if (this.page === 0) {
      this.leftArrow.classList.add('no-display');
    }

    const leftArrowImg = document.createElement('img');
    leftArrowImg.src = 'assets/icons/left_arrow.svg';

    this.leftArrow.append(leftArrowImg);
    this.leftArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToPrevGridPage'
      });
    });

    this.rightArrow = document.createElement('a');
    this.rightArrow.href = '#';
    this.rightArrow.classList.add(style.right_arrow);
    if (this.page === 3) {
      this.rightArrow.classList.add('no-display');
    }

    const rightArrowImg = document.createElement('img');
    rightArrowImg.src = 'assets/icons/right_arrow.svg';

    this.rightArrow.append(rightArrowImg);
    this.rightArrow.addEventListener('click', () => {
      invoke({
        type: 'moveToNextGridPage'
      });
    });

    this.tbody.append(...this.rows);
    this.table.append(this.tbody);
    this.element.append(this.table, this.leftArrow, this.rightArrow);

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

    this.tbody.addEventListener('mouseleave', () => {
      invoke({
        type: 'turnOffSubscriptionCover',
        payload: {
          hoverOnGrid: false
        }
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
        this.subscription.firstElementChild!.textContent = subscriptionInfo.includes(
          Number(mediaLogo.dataset.id)
        )
          ? '해지하기'
          : '구독하기';
        cell.append(this.subscription);
        continue;
      }
      if (cell.childElementCount > 1) {
        cell.removeChild(cell.lastElementChild!);
      }
    }
  }

  flipPage(imgs: GridImg[]) {
    const numberOfCells = this.numbers.rows * this.numbers.cellsInRow;
    const firstGridIndex = numberOfCells * this.page;
    const limitGridIndex = firstGridIndex + numberOfCells;

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
