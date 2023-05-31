import { createElement } from '../../utils/domUtils';
import style from './MainHeader.module.css';

export default class MainHeader {
  public element;
  private tabs;
  private viewers;

  constructor(props: {
    targetMedia: 'total' | 'subscribed';
    viewerState: 'listView' | 'gridView';
  }) {
    this.element = createElement('header', { class: style.header });
    this.tabs = this.createTabs();
    this.viewers = this.createViewers();

    const tabNav = this.createNavElement('tab');
    const viewerNav = this.createNavElement('viewer');

    this.element.append(tabNav, viewerNav);

    this.render(props);
    this.setEvent();
  }

  private createTabs() {
    const tabInfo = [
      { text: '전체 언론사', targetMedia: 'total' },
      { text: '내가 구독한 언론사', targetMedia: 'subscribed' }
    ];
    return tabInfo.map((info) => {
      const anchor = createElement('a', {
        href: '#',
        class: style.tab_item,
        'data-target-media': info.targetMedia
      });
      anchor.textContent = info.text;

      return anchor;
    });
  }

  private createViewers() {
    const viewerInfo = [
      { src: 'assets/icons/list-view.svg', alt: '리스트 보기', state: 'listView' },
      { src: 'assets/icons/grid-view.svg', alt: '그리드 보기', state: 'gridView' }
    ];

    return viewerInfo.map((icon) => {
      const anchor = createElement('a', {
        href: '#',
        class: style.viewer_item,
        'data-state': icon.state
      });
      const img = createElement('img', {
        src: icon.src,
        alt: icon.alt
      });

      anchor.append(img);
      return anchor;
    });
  }

  private createNavElement(item: 'tab' | 'viewer') {
    const className = style[`${item}_list`];
    const targets = this[`${item}s`];
    
    const nav = createElement('nav');
    const list = createElement('ul', { class: className });

    const items = targets.map((tab) => {
      const li = createElement('li');
      li.append(tab);

      return li;
    });

    list.append(...items);
    nav.append(list);

    return nav;
  }

  private render(props: {
    targetMedia: 'total' | 'subscribed';
    viewerState: 'listView' | 'gridView';
  }) {
    this.updateTabs(props.targetMedia);
    this.updateViewers(props.viewerState);
  }

  private updateTabs(targetMedia: 'total' | 'subscribed') {
    for (const tab of this.tabs) {
      const isActiveTab = tab.getAttribute('data-target-media') === targetMedia;
      tab.classList.toggle(style.active_tab, isActiveTab);
    }
  }

  private updateViewers(viewerState: 'listView' | 'gridView') {
    for (const viewer of this.viewers) {
      const isActiveViewer = viewer.getAttribute('data-state') === viewerState;
      viewer.classList.toggle(style.active_viewer, isActiveViewer);
    }
  }

  private setEvent() {}
}
