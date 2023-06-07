import { createElement } from '../utils.ts';
import { ListProps } from '../type.ts';

export class ListView {
  private props: ListProps;
  private element: HTMLElement;

  constructor(props: ListProps) {
    this.props = props;
    this.element = createElement('div', { class: 'list-view' });
    this.render();
  }

  async render() {
    const newsMain = document.querySelector('.main-contents');
    this.createListTap();
    this.createListMain();
    newsMain?.append(this.element);
  }

  createListTap() {
    const listTap = createElement('div', { class: 'list-tap' });

    for (let i = 0; i < this.props.category.length; i++) {
      const categoryBtn = createElement('button', { class: 'list-tap__category' });
      const categoryName = createElement('span');

      categoryName.textContent = this.props.category[i];
      categoryBtn.append(categoryName);
      listTap.append(categoryBtn);
    }

    this.element.append(listTap);
  }

  createListMain() {
    const listMain = createElement('div', { class: 'list-main' });

    listMain.append(this.createListHeader());
    listMain.append(this.createListContents());
    this.element.append(listMain);
  }

  createListHeader() {
    const headerWrap = createElement('div', { class: 'list-header' });
    const header = createElement('a', { href: '#' });
    const headerImg = createElement('img', { src: './src/asset/asset 35 1.svg' });
    const editTime = createElement('span');
    const subscribeBtn = createElement('button', { class: 'subscribe-btn' });
    const subscribeBtnImg = createElement('img', { src: './src/asset/icon/Symbol.svg', alt: '구독하기' });
    const subscribeBtnText = createElement('span');

    editTime.textContent = '2023.02.10. 18:27 편집';
    subscribeBtnText.textContent = '구독하기';
    header.append(headerImg);
    subscribeBtn.append(subscribeBtnImg, subscribeBtnText);
    headerWrap.append(header, editTime, subscribeBtn);

    return headerWrap;
  }

  createListContents() {
    const contentsWrap = createElement('div', { class: 'list-contents' });
    const leftContents = createElement('a', { class: 'list-contents__left' });
    const rightContents = createElement('div', { class: 'list-contents__right' });
    const thumbnailImg = createElement('img', { src: './src/asset/Thumbnail.png' });
    const thumbnailTitle = createElement('p');
    const contentsList = createElement('ul');

    for (let i = 0; i < this.props.newsList.length; i++) {
      const listWrap = createElement('li');
      const list = createElement('a');

      list.textContent = this.props.newsList[i];
      listWrap.append(list);
      contentsList.append(listWrap);
    }

    leftContents.append(thumbnailImg, thumbnailTitle);
    rightContents.append(contentsList);
    contentsWrap.append(leftContents, rightContents);

    return contentsWrap;
  }
}
