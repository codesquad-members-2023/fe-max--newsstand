import { createElement } from '../../../utils/domUtils';
import style from './GridView.module.css';
import { SubscribeButton } from '../SubscribeButton';

export class SubscriptionCover {
  public readonly element;
  private button;

  constructor() {
    this.element = createElement('div', { class: style.subscription });
    this.button = new SubscribeButton();

    this.element.append(this.button.element);
  }

  updateView({ mediaName, isSubscribed }: { mediaName: string; isSubscribed: boolean }) {
    this.button.updateView({ mediaName, isSubscribed })
  }
}
