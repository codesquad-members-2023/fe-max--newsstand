export default class MainHeader {
  public element: HTMLElement;
  private tabs: HTMLElement;
  private tabList: HTMLUListElement;
  private tabItems: HTMLLIElement[];
  private viewTabs: HTMLElement;
  private viewList: HTMLUListElement;
  private viewItems: HTMLLIElement[];

  constructor() {
    this.element = document.createElement('header');  

    this.tabs = document.createElement('nav');
    this.tabList = document.createElement('ul');
    this.tabItems = ['전체 언론사', '내가 구독한 언론사'].map((tabName) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = tabName;

      li.append(anchor);
      return li;
    })

    this.viewTabs = document.createElement('nav');
    this.viewList = document.createElement('ul');
    this.viewItems = [{src: 'assets/icons/list-view.svg', alt: '리스트 보기'}, {src: 'assets/icons/grid-view.svg', alt: '그리드 보기'}].map((icon) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      const img = document.createElement('img');
      Object.assign(img, icon);

      anchor.append(img);
      li.append(anchor);
      return li;
    })

    this.tabList.append(...this.tabItems);
    this.tabs.append(this.tabList);
    this.viewList.append(...this.viewItems);
    this.viewTabs.append(this.viewList);

    this.element.append(this.tabs, this.viewTabs);
  }
}