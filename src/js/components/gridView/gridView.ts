import { NUMBER_OF_GRID_CONTENTS } from '../../constant.ts';
import { createElement } from '../../utils.ts';
import { GridViewProps } from '../../type.ts';

const GridViewProps = {
  sizeOfGrid: NUMBER_OF_GRID_CONTENTS,
};

export class GridView {
  private props: GridViewProps;
  private element: HTMLElement;

  constructor() {
    this.props = GridViewProps;
    this.element = createElement('div', { class: 'grid-view' });
  }

  render() {
    this.element.innerHTML = '';
    const mainContents = document.querySelector('.main-wrap');

    for (let i = 0; i < this.props.sizeOfGrid; i++) {
      const gridContent = createElement('div', { class: 'grid-view__content' });
      const contentImg = createElement('img', { class: 'grid-view__img' });

      gridContent.append(contentImg);
      this.element.append(gridContent);
    }
    mainContents?.append(this.element);
  }
}
