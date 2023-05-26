import style from './GridView.module.css';

export default class GridView {
  public element: HTMLElement;
  private table: HTMLTableElement;
  private tbody: HTMLTableSectionElement;
  private rows: HTMLTableRowElement[];
  private cells: HTMLTableCellElement[];
  private leftArrow: HTMLAnchorElement;
  private rightArrow: HTMLAnchorElement;

  constructor({ gridInfo }: { gridInfo: GridInfo }) {
    this.element = document.createElement('section');
    this.element.classList.add(style.grid_view);

    this.table = document.createElement('table');
    this.table.classList.add(style.table);

    this.tbody = document.createElement('tbody');
    const numberOfRows = 4;
    const numberOfCellsInRow = 6;
    this.rows = [...Array(numberOfRows)].map((_) => document.createElement('tr'));

    const numberOfCells = numberOfRows * numberOfCellsInRow;
    const firstGridIndex = numberOfCells * gridInfo.page;
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
      const cellsInRow = this.cells.slice(
        index * numberOfCellsInRow,
        (index + 1) * numberOfCellsInRow
      );
      row.append(...cellsInRow);
    });

    this.leftArrow = document.createElement('a');
    this.leftArrow.href = '#';
    this.leftArrow.classList.add(style.left_arrow);
    if (gridInfo.page === 0) {
      this.leftArrow.classList.add('no-display');
    }

    const leftArrowImg = document.createElement('img');
    leftArrowImg.src = 'assets/icons/left_arrow.svg'

    this.leftArrow.append(leftArrowImg);

    this.rightArrow = document.createElement('a');
    this.rightArrow.href = '#';
    this.rightArrow.classList.add(style.right_arrow);
    if (gridInfo.page === 3) {
      this.rightArrow.classList.add('no-display');
    }

    const rightArrowImg = document.createElement('img');
    rightArrowImg.src = 'assets/icons/right_arrow.svg'

    this.rightArrow.append(rightArrowImg);

    this.tbody.append(...this.rows);
    this.table.append(this.tbody);
    this.element.append(this.table, this.leftArrow, this.rightArrow);
  }
}
