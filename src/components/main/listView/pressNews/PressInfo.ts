import { createElement } from '@utils/domUtils';
import SubscribeButton from '@components/main/SubscribeButton';
import style from '@components/main/listView/ListView.module.css';

export default class PressInfo {
  public readonly element = createElement('header', { class: style.press_info });
  private brandMark = createElement('a', { class: style.brand_mark });
  private brandMarkImage = createElement('img');
  private editDate = createElement('span', { class: [style.edit_date, 'font-body-xs'] });
  private subscribeButton = new SubscribeButton();

  constructor() {
    this.brandMark.append(this.brandMarkImage);
    this.element.append(this.brandMark, this.editDate, this.subscribeButton.element);
  }

  updateView({ url, imgSrc, imgAlt, editInfo }: MediaInfo, subscriptionInfo: string[]) {
    this.brandMark.setAttribute('href', url);
    this.brandMarkImage.setAttribute('src', imgSrc);
    this.brandMarkImage.setAttribute('alt', imgAlt);
    this.editDate.textContent = editInfo;
    this.subscribeButton.updateView({
      mediaName: imgAlt,
      isSubscribed: subscriptionInfo.includes(imgAlt)
    });
  }
}
