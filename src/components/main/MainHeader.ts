import { createElement } from '../../utils/domUtils';
import style from './MainHeader.module.css';

export default class MainHeader {
  public element;
  private tabItems;
  private viewerItems;

  constructor() {
    this.element = createElement('header', { class: style.header});

    const tabs = createElement('nav');
    const tabList = createElement('ul', { class: style.tab_list});

    this.tabItems = [{name: '전체 언론사', state: 'active'}, {name: '내가 구독한 언론사', state: 'inactive'}].map((tabInfo) => {
      const listFont = tabInfo.state === 'active' ? 'font-title-md' : 'font-body-md';
      const li = createElement('li', { class: listFont});
      const anchor = createElement('a', {href: '#'});
      anchor.textContent = tabInfo.name;
      anchor.classList.toggle(style.dimmed, tabInfo.state !== 'active');

      li.append(anchor);
      return li;
    });

    const viewers = createElement('nav');
    const viewerList = createElement('ul', { class: style.viewer_list});

    this.viewerItems = [
      { src: 'assets/icons/list-view.svg', alt: '리스트 보기', state: 'inactive' },
      { src: 'assets/icons/grid-view.svg', alt: '그리드 보기', state: 'active' }
    ].map((icon) => {
      const iconClassName = icon.state === 'active' ? style.active_icon : style.inactive_icon;

      const li = createElement('li');
      const anchor = createElement('a', { href: '#'});
      const img = createElement('img', { src: icon.src, alt: icon.alt, class: iconClassName});

      anchor.append(img);
      li.append(anchor);
      return li;
    });

    tabList.append(...this.tabItems);
    tabs.append(tabList);
    viewerList.append(...this.viewerItems);
    viewers.append(viewerList);

    this.element.append(tabs, viewers);
  }
}
