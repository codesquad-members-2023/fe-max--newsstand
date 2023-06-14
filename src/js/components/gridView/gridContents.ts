import fetchedData from '../../../../db.json';
import { GridContentsProps } from '../../type.ts';
import { store } from '../../store/store.ts';
import { shuffleArray } from '../../utils.ts';

const GridContentsProps = {
  pressList: shuffleArray([...fetchedData.pressList]),
  subscribedPress: [],
};

export class GridContents {
  private props: GridContentsProps;

  constructor() {
    this.props = GridContentsProps;
    this.setEvent();
  }

  render() {
    const state = store.getState();
    if (!state.isGrid) return;
    state.isAllPress ? this.renderAllPress(state.pageIndex) : this.renderSubscribedPress(state.pageIndex);
  }

  renderAllPress(index: number) {
    const element = document.querySelectorAll('.grid-view__img');
    let count: number = 0;
    for (let i = 0 + 24 * index; i < 24 + 24 * index; i++) {
      element[count].setAttribute('src', this.props.pressList[i].src);
      element[count].setAttribute('alt', this.props.pressList[i].alt);
      count++;
    }
  }

  renderSubscribedPress(index: number) {
    const element = document.querySelectorAll('.grid-view__img');
    let count: number = 0;
    for (let i = 0 + 24 * index; i < 24 + 24 * index; i++) {
      if (this.props.subscribedPress[i]) {
        element[count].setAttribute('src', this.props.subscribedPress[i].src);
        element[count].setAttribute('alt', this.props.subscribedPress[i].alt);
        count++;
      }
    }
  }

  setEvent() {
    store.subscribe(this.render.bind(this));
  }
}
