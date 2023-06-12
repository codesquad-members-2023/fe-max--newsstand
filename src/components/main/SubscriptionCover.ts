import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';
import { SubscribeButton } from './SubscribeButton';

export class SubscriptionCover {
  private element;
  private button;

  constructor() {
    this.element = createElement('div', { class: style.subscription });
    this.button = new SubscribeButton();

    this.element.append(this.button.element);
  }

  getElement() {
    return this.element;
  }

  updateState({ mediaId, isSubscribed }: { mediaId: number; isSubscribed: boolean }) {
    this.button.updateState({ mediaId, isSubscribed })
  }
}
