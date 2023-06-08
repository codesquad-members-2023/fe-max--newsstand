import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';
import { SubscribeButton } from './SubscribeButton';

export class SubscriptionCover {
  public readonly element;
  private button;

  constructor() {
    this.element = createElement('div', { class: style.subscription });
    this.button = new SubscribeButton();

    this.element.append(this.button.element);
  }

  updateState({ mediaId, isSubscribed }: { mediaId: number; isSubscribed: boolean }) {
    this.button.updateState({ mediaId, isSubscribed })
  }
}
