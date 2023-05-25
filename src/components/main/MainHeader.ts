import style from './MainHeader.module.css';

export default class MainHeader {
  public element: HTMLElement;
  private tabs: HTMLElement;
  private tabList: HTMLUListElement;
  private tabItems: HTMLLIElement[];
  private viewers: HTMLElement;
  private viewerList: HTMLUListElement;
  private viewerItems: HTMLLIElement[];

  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add(style.header);

    this.tabs = document.createElement('nav');
    this.tabList = document.createElement('ul');
    this.tabList.classList.add(style.tab_list);
    this.tabItems = [{name: '전체 언론사', state: 'active'}, {name: '내가 구독한 언론사', state: 'inactive'}].map((tabInfo) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = tabInfo.name;

      if (tabInfo.state === 'active') {
        li.classList.add('font-title-md');
      } else {
        li.classList.add('font-body-md');
        anchor.classList.add(style.dimmed);
      }

      li.append(anchor);
      return li;
    });

    this.viewers = document.createElement('nav');
    this.viewerList = document.createElement('ul');
    this.viewerList.classList.add(style.viewer_list);
    this.viewerItems = [
      { src: 'assets/icons/list-view.svg', alt: '리스트 보기', state: 'inactive' },
      { src: 'assets/icons/grid-view.svg', alt: '그리드 보기', state: 'active' }
    ].map((icon) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      const img = document.createElement('img');
      Object.assign(img, icon);

      const iconClassName = icon.state === 'active' ? style.active_icon : style.inactive_icon;
      img.classList.add(iconClassName);

      anchor.append(img);
      li.append(anchor);
      return li;
    });

    this.tabList.append(...this.tabItems);
    this.tabs.append(this.tabList);
    this.viewerList.append(...this.viewerItems);
    this.viewers.append(this.viewerList);

    this.element.append(this.tabs, this.viewers);
  }
}
