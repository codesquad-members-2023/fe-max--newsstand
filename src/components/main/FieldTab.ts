import { createElement } from '../../utils/domUtils';
import style from './ListView.module.css';

export class FieldTab {
  public element;
  private fields;

  constructor() {
    this.element = createElement('nav', { class: style.field_tab });
    const container = createElement('ul', { class: style.field_tab__container });
    this.fields = this.createFields();

    container.append(...this.fields);
    this.element.append(container);
  }

  private createFields() {
    const titles = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연예',
      '매거진/전문지',
      '지역'
    ];
    return titles.map((title) => {
      const item = createElement('li', {
        class: [style.field_tab__item, 'font-body-sm'],
        'data-field': title
      });
      const anchor = createElement('a', { href: '#' });
      anchor.textContent = title;

      const counter = createElement('span');

      item.append(anchor, counter);

      return item;
    });
  }

  updateView({ news }: { news: NewsData | null }) {
    if (!news) {
      return;
    }
    for (const field of this.fields) {
      const activeField = field.dataset.field === news.category;
      if (activeField) {
        field.dataset.active = 'true'
        this.setFieldCount(field, `${news.order}/${news.categoryCount}`);
      } else {
        field.dataset.active = 'false'
        this.setFieldCount(field, '');
      }
    }
  }

  setFieldCount(field: HTMLElement, count: string) {
    const fieldCounter = field?.lastElementChild;
    if (!fieldCounter) return;
    fieldCounter.textContent = count;
  }
}
