import { store } from '../..';
import { Component } from '../../Component';
import { Actions } from '../../actions';
import { GridView } from './GridView';
import { ListView } from './ListView';
import { NewsStandState } from '../../utils/types';

export class Main extends Component {
  header: HTMLElement;
  content: HTMLDivElement;
  tabArea: HTMLDivElement;
  allPressTab: HTMLDivElement;
  subPressTab: HTMLDivElement;
  viewBtnArea: HTMLDivElement;
  listBtn: HTMLButtonElement;
  gridBtn: HTMLButtonElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridView: GridView;
  listView;

  constructor(props: NewsStandState) {
    super(props);
    this.render();
    this.setEvent();
    this.mount();
    this.componentDidMount();
  }

  render(): void {
    this.element = document.createElement('main');

    this.renderMainHeader();
    this.renderContentArea();
  }

  setEvent(): void {
    this.allPressTab.addEventListener('click', () => {
      Actions.showAllTab();
    });

    this.subPressTab.addEventListener('click', () => {
      Actions.showSubTab();
    });

    this.gridBtn.addEventListener('click', () => {
      Actions.showGridView();
    });

    this.listBtn.addEventListener('click', () => {
      Actions.showListView();
    });

    this.leftBtn.addEventListener('click', () => {
      Actions.movePrevPage();
    });

    this.rightBtn.addEventListener('click', () => {
      Actions.moveNextPage();
    });
  }

  mount(): void {
    this.gridView = new GridView(this.props);
    this.listView = new ListView(this.props);

    this.header.append(this.tabArea, this.viewBtnArea);
    this.content.append(this.leftBtn, this.rightBtn);

    if (this.props.viewType === 'Grid') {
      this.content.append(this.gridView.element);
    }

    if (this.props.viewType === 'List') {
      this.content.append(this.listView.element);
    }

    this.element.append(this.header, this.content);
  }

  componentDidMount(): void {
    store.subscribe(() => {
      this.update(store.getState());
    });
    store.subscribe(() => {
      this.gridView.update(store.getState());
    });
  }

  update(newState: NewsStandState) {
    if (
      newState.currentPageIdx === this.props.currentPageIdx &&
      newState.viewTab === this.props.viewTab &&
      newState.viewType === this.props.viewType
    ) {
      return;
    }

    this.props = newState;

    if (this.props.currentPageIdx === 1) {
      this.leftBtn.classList.add('hide');
    } else if (this.props.currentPageIdx === 4) {
      this.rightBtn.classList.add('hide');
    } else {
      this.leftBtn.classList.remove('hide');
      this.rightBtn.classList.remove('hide');
    }

    if (this.props.viewTab === 'All') {
      this.allPressTab.classList.add('active');
      this.subPressTab.classList.remove('active');
    }
    if (this.props.viewTab === 'Sub') {
      this.allPressTab.classList.remove('active');
      this.subPressTab.classList.add('active');
    }

    if (this.props.viewType === 'Grid') {
      this.gridBtn.classList.add('active');
      this.listBtn.classList.remove('active');
      this.content.removeChild(this.listView.element);
      this.content.append(this.gridView.element);
    }

    if (this.props.viewType === 'List') {
      this.gridBtn.classList.remove('active');
      this.listBtn.classList.add('active');
      this.content.removeChild(this.gridView.element);
      this.content.append(this.listView.element);
    }
  }

  renderMainHeader() {
    const mainHeader = document.createElement('header');
    mainHeader.classList.add('header--main');
    this.header = mainHeader;

    this.renderTabArea();
    this.renderBtnArea();
  }

  renderContentArea() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('content-area');

    this.renderLeftBtn();
    this.renderRightBtn();

    this.content = mainContent;
  }

  renderTabArea() {
    const tabArea = document.createElement('div');
    tabArea.classList.add('tab-btn__menu');

    const allPressTab = document.createElement('div');
    allPressTab.classList.add('tab-btn__item', 'active');
    allPressTab.textContent = '전체 언론사';

    const subPressTab = document.createElement('div');
    subPressTab.classList.add('tab-btn__item');
    subPressTab.textContent = '내가 구독한 언론사';

    this.allPressTab = allPressTab;
    this.subPressTab = subPressTab;
    this.tabArea = tabArea;
    tabArea.append(allPressTab, subPressTab);
  }

  renderBtnArea() {
    const viewBtnArea = document.createElement('div');
    viewBtnArea.classList.add('view-btn__menu');

    const listBtn = document.createElement('button');
    listBtn.classList.add('view-btn__item', 'list-icon');

    const gridBtn = document.createElement('button');
    gridBtn.classList.add('view-btn__item', 'grid-icon', 'active');

    this.listBtn = listBtn;
    this.gridBtn = gridBtn;
    this.viewBtnArea = viewBtnArea;
    viewBtnArea.append(listBtn, gridBtn);
  }

  renderLeftBtn() {
    const leftBtn = document.createElement('button');
    this.leftBtn = leftBtn;
    leftBtn.classList.add('btn', 'btn--left', 'hide');
  }

  renderRightBtn() {
    const rightBtn = document.createElement('button');
    this.rightBtn = rightBtn;
    rightBtn.classList.add('btn', 'btn--right');
  }
}
