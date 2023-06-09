import { invoke } from '../../../main';
import { createElement } from '../../../utils/domUtils';
import { SubscriptionCover } from './SubscriptionCover';
import style from './GridView.module.css';

type GridViewProps = {
  gridInfo: GridInfo;
  subscriptionInfo: number[];
};

export default class GridView {
  public readonly element;
  private table;
  private cells;
  private subscriptionCover;
  private numberOfCells = 24;
  private props;

  constructor(props: GridViewProps) {
    this.element = createElement('section', { class: style.grid_view });
    this.cells = this.createCells();
    this.table = this.createTable();
    this.subscriptionCover = new SubscriptionCover();

    this.element.append(this.table);

    this.props = this.updateProps(props);
    this.updateView(props);
    this.setEvent();
  }

  private createCells() {
    return [...Array(this.numberOfCells)].map((_, index) => {
      const cell = createElement('td', { class: style.cell });
      cell.dataset.index = index.toString();

      const anchor = createElement('a', { href: '#', class: style.media_thumb });
      const img = createElement('img', { class: style.media_logo });

      anchor.append(img);
      cell.append(anchor);

      return cell;
    });
  }

  private createTable() {
    const table = createElement('table', { class: style.table });
    const tbody = this.createTableBody();

    table.append(tbody);

    return table;
  }

  private createTableBody() {
    const numberOfRows = 4;
    const numberOfCellsInRow = Math.floor(this.numberOfCells / numberOfRows);

    const tbody = createElement('tbody');
    const rows = [...Array(numberOfRows)].map((_, index) => {
      const row = createElement('tr');
      const startIndex = index * numberOfCellsInRow;
      const limitIndex = (index + 1) * numberOfCellsInRow;

      row.append(...this.cells.slice(startIndex, limitIndex));

      return row;
    });

    tbody.append(...rows);

    return tbody;
  }

  private updateProps(props: GridViewProps) {
    return {
      imgs: [...props.gridInfo.imgs],
      page: props.gridInfo.page,
      isHover: props.gridInfo.isHover,
      hoverIndex: props.gridInfo.hoverIndex,
      subscribedIds: [...props.subscriptionInfo]
    };
  }

  private setEvent() {
    this.table.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (!(target instanceof Element)) {
        return;
      }
      const subscriptionCover = target.closest(`.${style.subscription}`);
      if (subscriptionCover) {
        return;
      }
      const cell = target.closest<HTMLElement>(`.${style.cell}`);
      if (!cell || !cell.dataset.index) {
        return;
      }
      invoke({
        type: 'turnOnSubscriptionCover',
        payload: {
          hoverOnGrid: true,
          hoveredCellIndex: parseInt(cell.dataset.index)
        }
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
  }

  updateView(props: GridViewProps) {
    const { imgs, page, isHover, hoverIndex } = props.gridInfo;
    if (
      this.props.isHover !== isHover ||
      this.props.hoverIndex !== hoverIndex ||
      this.props.subscribedIds !== props.subscriptionInfo
    ) {
      this.renderSubscriptionCover(isHover, hoverIndex, props.subscriptionInfo);
    }

    if (this.props.page !== page || this.props.imgs.length !== imgs.length) {
      this.renderCurrentPage(imgs, page);
    }

    this.props = this.updateProps(props);
  }

  private renderSubscriptionCover(
    isHover: boolean,
    hoverIndex: number,
    subscriptionInfo: number[]
  ) {
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells?.[i];
      if (!cell) {
        continue;
      }
      if (isHover && hoverIndex === i) {
        const index = this.props.page * this.numberOfCells + i;
        const media = this.props.imgs?.[index];
        if (!media) {
          continue;
        }
        const mediaId = media.id;
        const isSubscribed = subscriptionInfo.includes(mediaId);

        this.subscriptionCover.updateState({ mediaId, isSubscribed });
        cell.append(this.subscriptionCover.element);

        continue;
      }
      if (cell.childElementCount > 1) {
        this.subscriptionCover.element.remove();
      }
    }
  }

  private renderCurrentPage(imgs: GridImg[], page: number) {
    const firstGridIndex = this.numberOfCells * page;
    const limitGridIndex = firstGridIndex + this.numberOfCells;

    imgs.slice(firstGridIndex, limitGridIndex).forEach((img, index) => {
      const cell = this.cells?.[index];
      if (!cell) {
        return;
      }
      const mediaLogo = cell.querySelector(`.${style.media_logo}`);
      if (mediaLogo === null) {
        return;
      }
      mediaLogo.setAttribute('src', img.src);
      mediaLogo.setAttribute('alt', img.alt);
      mediaLogo.setAttribute('data-id', img.id.toString());
    });
  }
}
