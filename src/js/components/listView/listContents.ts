import fetchedData from '../../../../db.json';
import { ListContentsProps } from '../../type.ts';
import { store } from '../../store/store.ts';
import { shuffleArray } from '../../utils.ts';

const ListContentsProps = {
  newsList: fetchedData.newsList,
};

export class ListContents {
  private props: ListContentsProps;

  constructor() {
    this.props = ListContentsProps;
    this.setEvent();
  }

  render() {
    this.renderHeader();
  }

  renderHeader() {
    const header = document.querySelector('.header-wrap');
    const headerImg = document.querySelector('.list-header__img');
    const editTime = document.querySelector('.list-header__editTitme');

    header?.setAttribute('href', this.props.newsList['종합/경제'][0].mainArticle.thumbnailSrc);
  }

  setEvent() {
    store.subscribe(this.render.bind(this));
  }
}
