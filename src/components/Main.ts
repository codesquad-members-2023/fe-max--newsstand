import { Component } from '../Component';
import { GridView } from './GridView';

export class Main extends Component {
  header: HTMLElement;
  content: HTMLDivElement;
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;

  render() {
    this.element = document.createElement('main');

    this.renderMainHeader();
    this.renderMainContent();
  }

  mount() {
    this.element.append(this.header, this.content);
  }

  renderMainHeader() {
    const mainHeader = document.createElement('header');
    mainHeader.classList.add('header--main');
    this.header = mainHeader;

    this.renderTabArea();
    this.renderBtnArea();
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

    tabArea.append(allPressTab, subPressTab);
    this.header.append(tabArea);
  }

  renderBtnArea() {
    const viewBtnArea = document.createElement('div');
    viewBtnArea.classList.add('view-btn__menu');

    const listBtn = document.createElement('button');
    listBtn.classList.add('view-btn__item', 'list-icon');

    const gridBtn = document.createElement('button');
    gridBtn.classList.add('view-btn__item', 'grid-icon', 'active');

    viewBtnArea.append(listBtn, gridBtn);
    this.header.append(viewBtnArea);
  }

  renderMainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('content-area');
    this.content = mainContent;

    this.renderLeftBtn();
    this.renderRightBtn();
    this.content.append(this.leftBtn, this.rightBtn);

    const gridView = new GridView(this.props);
    this.content.append(gridView.element);
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
