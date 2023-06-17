import { dispatch, subscribe } from '@/dispatcher';
import { createElement } from '@utils/domUtils';
import style from '@components/main/MainHeader.module.css';

export type MainHeaderProps = {
  mainViewerInfo: {
    targetMedia: 'total' | 'subscribed';
    viewer: 'listView' | 'gridView';
  };
};

export default class MainHeader {
  public readonly element;
  private targetMediaTabs;
  private viewerModeTabs;

  constructor(props: MainHeaderProps) {
    this.element = createElement('header', { class: style.header });
    this.targetMediaTabs = this.createtargetMediaTabs();
    this.viewerModeTabs = this.createViewerModeTabs();

    const targetMediaNav = this.createNavElement('targetMedia');
    const viewerModeNav = this.createNavElement('viewerMode');

    this.element.append(targetMediaNav, viewerModeNav);
    this.setEvent();
    
    subscribe(this.updateView.bind(this));
  }

  private createtargetMediaTabs() {
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

  private createViewerModeTabs() {
    const viewerInfo = [
      { src: 'assets/icons/list-view.svg', alt: '리스트 보기', state: 'listView' },
      { src: 'assets/icons/grid-view.svg', alt: '그리드 보기', state: 'gridView' }
    ];

    return viewerInfo.map((icon) => {
      const anchor = createElement('a', {
        href: '#',
        class: style.viewer_item,
        'data-viewer': icon.state
      });
      const img = createElement('img', {
        src: icon.src,
        alt: icon.alt
      });

      anchor.append(img);
      return anchor;
    });
  }

  private createNavElement(item: 'targetMedia' | 'viewerMode') {
    const className = style[`${item}_list`];
    const targets = this[`${item}Tabs`];

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

  updateView(props: MainHeaderProps) {
    this.updateTargetMediaTabs(props.mainViewerInfo.targetMedia);
    this.updateViewerModeTabs(props.mainViewerInfo.viewer);
  }

  private updateTargetMediaTabs(targetMedia: 'total' | 'subscribed') {
    for (const tab of this.targetMediaTabs) {
      const isActiveTab = tab.getAttribute('data-target-media') === targetMedia;
      tab.classList.toggle(style.active_targetMedia!, isActiveTab);
    }
  }

  private updateViewerModeTabs(viewerState: 'listView' | 'gridView') {
    for (const viewer of this.viewerModeTabs) {
      const isActiveViewer = viewer.getAttribute('data-viewer') === viewerState;
      viewer.classList.toggle(style.active_viewerMode!, isActiveViewer);
    }
  }

  private setEvent() {
    this.viewerModeTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const viewerName = tab.getAttribute('data-viewer');
        const isActiveViewer = tab.classList.contains(style.active_viewerMode!);
        if (viewerName && !isActiveViewer) {
          dispatch({
            type: 'changeViewer',
            payload: {
              viewer: viewerName as 'gridView' | 'listView'
            }
          });
        }
      });
    });
  }
}
