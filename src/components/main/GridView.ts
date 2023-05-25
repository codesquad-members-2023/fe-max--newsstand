import style from './GridView.module.css'

type GridViewProps = {
  gridImgs: GridImg[]
}

export default class GridView {
  public element: HTMLElement;
  private table: HTMLTableElement;
  private tbody: HTMLTableSectionElement;
  private rows: HTMLTableRowElement[];
  private cells: HTMLTableCellElement[];

  constructor(props: GridViewProps) {
    this.element = document.createElement('section');
    
    this.table = document.createElement('table');
    this.table.classList.add(style.table)

    this.tbody = document.createElement('tbody');
    const numberOfRows = 4;
    const numberOfCellsInRow = 6;
    this.rows = [...Array(numberOfRows)].map((_) => document.createElement('tr'));

    const numberOfCells = numberOfRows * numberOfCellsInRow;
    this.cells = props.gridImgs.slice(0, numberOfCells).map((gridImg, index) => {
      const cell = document.createElement('td');
      cell.classList.add(style.cell);

      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.classList.add(style.media_thumb);

      const img = document.createElement('img');
      img.classList.add(style.media_logo);
      Object.assign(img, {src: gridImg.src, alt: gridImg.alt});

      anchor.append(img);
      cell.append(anchor);

      return cell;
    });

    this.rows.forEach((row, index) => {
      const cellsInRow = this.cells.slice(index * numberOfCellsInRow, (index + 1) * numberOfCellsInRow);
      row.append(...cellsInRow);
    })

    this.tbody.append(...this.rows);
    this.table.append(this.tbody);
    this.element.append(this.table);
  }
}