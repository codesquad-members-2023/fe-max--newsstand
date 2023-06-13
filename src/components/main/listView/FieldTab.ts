import { invoke } from '../../../store';
import { getNewsFields } from '../../../utils/dataUtils';
import { createElement } from '../../../utils/domUtils';
import { Field } from './Field';
import style from './ListView.module.css';

export class FieldTab {
  public readonly element = createElement('nav', { class: style.field_tab });
  private container = createElement('ul', { class: style.field_tab__container });
  private fields;

  constructor(props: { fields: FieldData[] }) {
    this.fields = props.fields.map(() => new Field());

    this.fields.forEach((field) => this.container.append(field.element));
    this.element.append(this.container);

    this.initFieldData();
  }

  private async initFieldData() {
    invoke({
      type: 'initFieldData',
      payload: {
        fields: await getNewsFields()
      }
    });
  }

  updateView({ news, fields }: { news: NewsData | null; fields: FieldData[] }) {
    if (this.fields.length !== fields.length) {
      this.fields = fields.map(() => new Field());
      this.fields.forEach((field) => this.container.append(field.element));
    }
    if (news) {
      this.fields.forEach((field, index) => field.updateView(fields[index]!, news));
    }
  }
}
