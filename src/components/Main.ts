import { GridNewsData, ListNewsData } from '../types';
import { GridView } from './GridView';

export class Main {
  element: HTMLElement;

  constructor(props: { gridData: GridNewsData[]; listData: ListNewsData[] }) {
    this.element = document.createElement('main');

    {
      const headerTab = document.createElement('header');
      headerTab.classList.add('header--main');

      {
        const tabBtnMenu = document.createElement('div');
        tabBtnMenu.classList.add('tab-btn__menu');

        const showAllBtn = document.createElement('div');
        showAllBtn.classList.add('tab-btn__item', 'active');
        showAllBtn.textContent = '전체 언론사';

        const showSubscribedBtn = document.createElement('div');
        showSubscribedBtn.classList.add('tab-btn__item');
        showSubscribedBtn.textContent = '내가 구독한 언론사';

        tabBtnMenu.append(showAllBtn, showSubscribedBtn);
        headerTab.append(tabBtnMenu);
      }

      {
        const viewBtnMenu = document.createElement('div');
        viewBtnMenu.classList.add('view-btn__menu');

        const listBtn = document.createElement('button');
        listBtn.classList.add('view-btn__item', 'list-icon');

        const gridBtn = document.createElement('button');
        gridBtn.classList.add('view-btn__item', 'grid-icon', 'active');

        viewBtnMenu.append(listBtn, gridBtn);
        headerTab.append(viewBtnMenu);
      }

      this.element.append(headerTab);
    }

    const content = document.createElement('div');
    content.classList.add('content-area');

    const gridView = new GridView(props.gridData);
    content.append(gridView.leftBtn, gridView.rightBtn, gridView.element);

    this.element.append(content);
  }
}
