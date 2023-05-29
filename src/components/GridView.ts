export class GridView {
  element: HTMLElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor(props) {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');

    const leftBtn = document.createElement('button');
    this.leftBtn = leftBtn;
    leftBtn.classList.add('btn', 'btn--left');

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

    this.render(props);
  }

  render(props) {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      itemImg.src = props.newsData[idx].logoURL;
      itemImg.alt = props.newsData[idx].name;
    });
  }
}
