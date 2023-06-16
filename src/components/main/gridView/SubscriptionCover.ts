import { createElement } from '@utils/domUtils';
import SubscribeButton from '@components/main/SubscribeButton';
import style from '@components/main/gridView/GridView.module.css';

export default class SubscriptionCover {
  public readonly element;
  private button;

  constructor() {
    this.element = createElement('div', { class: style.subscription });
    this.button = new SubscribeButton();

    this.element.append(this.button.element);
  }

  updateView({ mediaName, isSubscribed }: { mediaName: string; isSubscribed: boolean }) {
    this.button.updateView({ mediaName, isSubscribed });
  }
}
