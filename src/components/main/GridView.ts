export default class GridView {
  public element: HTMLElement;
  private table: HTMLTableElement;
  private tbody: HTMLTableSectionElement;
  private rows: HTMLTableRowElement[];
  private cells: HTMLTableCellElement[];

  constructor() {
    this.element = document.createElement('section');
    this.table = document.createElement('table');
    this.tbody = document.createElement('tbody');
    const numberOfRows = 4;
    const numberOfCellsInRow = 6;
    this.rows = [...Array(numberOfRows)].map((_) => document.createElement('tr'));
    const numberOfCells = numberOfRows * numberOfCellsInRow;
    this.cells = [...Array(numberOfCells)].map((_, index) => {
      const cell = document.createElement('td');
      const anchor = document.createElement('a');
      const img = document.createElement('img');
      Object.assign(img, {src:'', alt: `브랜드마크${index + 1}`});

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