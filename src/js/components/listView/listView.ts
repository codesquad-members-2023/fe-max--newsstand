import { createElement } from '../../utils.ts';
import { ListViewProps } from '../../type.ts';

const ListViewProps = {
  category: ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'],
  numberOfListContents: 6,
};

export class ListView {
  private props: ListViewProps;
  private element: HTMLElement;

  constructor() {
    this.props = ListViewProps;
    this.element = createElement('div', { class: 'list-view' });
  }

  async render() {
    this.element.innerHTML = '';
    const mainContents = document.querySelector('.main-wrap');
    this.createListTap();
    this.createListMain();
    mainContents?.append(this.element);
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
    const header = createElement('a', { class: 'header-wrap' });
    const headerImg = createElement('img', { class: 'list-header__img' });
    const editTime = createElement('span', { class: 'list-header__editTitme' });
    const subscribeBtn = createElement('button', { class: 'subscribe-btn' });
    const subscribeBtnImg = createElement('img', { src: './src/asset/icon/Symbol.svg', alt: '구독하기' });
    const subscribeBtnText = createElement('span');

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
    const thumbnailImg = createElement('img');
    const thumbnailTitle = createElement('p');
    const contentsList = createElement('ul');

    for (let i = 0; i < this.props.numberOfListContents; i++) {
      const listWrap = createElement('li');
      const list = createElement('a');

      listWrap.append(list);
      contentsList.append(listWrap);
    }

    leftContents.append(thumbnailImg, thumbnailTitle);
    rightContents.append(contentsList);
    contentsWrap.append(leftContents, rightContents);

    return contentsWrap;
  }
}
