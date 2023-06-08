import { createElement } from '../../../../utils/domUtils';
import { SubscribeButton } from '../../SubscribeButton';
import style from '../ListView.module.css';

export class PressInfo {
  public readonly element = createElement('header', { class: style.press_info });
  private brandMark = createElement('a', { class: style.brand_mark });
  private brandMarkImage = createElement('img');
  private editDate = createElement('span', { class: [style.edit_date, 'font-body-xs'] });
  private subscribeButton = new SubscribeButton();

  constructor() {
    this.brandMark.append(this.brandMarkImage);
    this.element.append(this.brandMark, this.editDate, this.subscribeButton.element);
  }

  updateView({ url, imgSrc, imgAlt, editInfo }: MediaInfo) {
    this.brandMark.setAttribute('href', url)
    this.brandMarkImage.setAttribute('src', imgSrc);
    this.brandMarkImage.setAttribute('alt', imgAlt);
    this.editDate.textContent = editInfo;
  }
}
