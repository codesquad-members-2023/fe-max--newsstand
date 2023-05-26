import { invoke } from '../../main';
import style from './GridView.module.css';

export default class GridView {
  public element: HTMLElement;
  private table: HTMLTableElement;
  private tbody: HTMLTableSectionElement;
  private rows: HTMLTableRowElement[];
  private cells: HTMLTableCellElement[];
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

        anchor.append(img);
        cell.append(anchor);

        return cell;
      });

    this.rows.forEach((row, index) => {
      const startIndex = index * this.numbers.cellsInRow;
      const limitIndex = (index + 1) * this.numbers.cellsInRow
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
  }

  updateProps({ gridInfo }: { gridInfo: GridInfo }) {
    const gridImgs = gridInfo.imgs;
    const gridPage = gridInfo.page;
    
    if (this.page === gridPage) {
      return;
    }
    
    this.page = gridPage;

    const numberOfCells = this.numbers.rows * this.numbers.cellsInRow;
    const firstGridIndex = numberOfCells * this.page;
    const limitGridIndex = firstGridIndex + numberOfCells;

    gridImgs.slice(firstGridIndex, limitGridIndex).forEach((gridImg, index) => {
      const mediaLogo = this.cells[index].firstElementChild?.firstElementChild!;
      mediaLogo.setAttribute('src', gridImg.src);
      mediaLogo.setAttribute('alt', gridImg.alt);
    })

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
