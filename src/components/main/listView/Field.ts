import { createElement } from '../../../utils/domUtils';
import style from '../listView/ListView.module.css';

export class Field {
  public readonly element = createElement('li', { class: [style.field_tab__item, 'font-body-sm'] });
  private link = createElement('a', { href: '#' });
  private counter = createElement('span');

  constructor() {
    this.element.append(this.link, this.counter);
  }

  updateView(field: FieldData, news: NewsData) {
    this.link.textContent = field.name;

    this.element.setAttribute('data-active', field.active.toString());
    this.counter.textContent = field.active ? `${news.order}/${news.categoryCount}` : '';
  }
}
