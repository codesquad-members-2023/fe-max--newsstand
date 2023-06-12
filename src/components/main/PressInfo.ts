import { createElement } from '../../utils/domUtils';
import { SubscribeButton } from './SubscribeButton';
import style from './ListView.module.css';

export class PressInfo {
  public element;
  private brandMark;
  private brandMarkImage;
  private editDate;
  private subscribeButton;

  constructor() {
    this.element = createElement('header', { class: style.press_info });
    this.brandMark = createElement('a', { class: style.brand_mark });
    this.brandMarkImage = createElement('img');
    this.brandMark.append(this.brandMarkImage);

    this.editDate = createElement('span', { class: [style.edit_date, 'font-body-xs'] });

    this.subscribeButton = new SubscribeButton();
    this.element.append(this.brandMark, this.editDate, this.subscribeButton.element);
  }

  updateView({imgSrc, imgAlt, editInfo}: { imgSrc: string; imgAlt: string; editInfo: string }) {
    this.brandMarkImage.setAttribute('src', imgSrc);
    this.brandMarkImage.setAttribute('alt', imgAlt);
    this.editDate.textContent = editInfo;
  }
}
