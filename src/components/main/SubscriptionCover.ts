import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './GridView.module.css';

export class SubscriptionCover {
  private element;
  private button;
  private text;
  private mediaId: number = -1;
  private mode: 'add' | 'remove' = 'add';

  constructor() {
    const cover = createElement('div', { class: style.subscription });
    const button = createElement('a', { href: '#', class: 'subscribe-button' });
    const icon = createElement('img', { src: 'assets/icons/plus-sm.svg', alt: '' });
    const text = document.createTextNode('');

    button.append(icon, text);
    cover.append(button);

    this.element = cover;
    this.button = button;
    this.text = text;

    this.setEvent();
  }

  private setEvent() {
    this.button.addEventListener('click', () => {
      invoke({
        type: 'updateSubscribedMedia',
        payload: {
          id: this.mediaId,
          mode: this.mode
        }
      });
    });
  }

  getElement() {
    return this.element;
  }

  private setText(newText: string) {
    this.text.textContent = newText;
  }

  private setMediaId(mediaId: number) {
    this.mediaId = mediaId;
  }

  private updateMode(isSubscribed: boolean) {
    if (isSubscribed) {
      this.mode = 'remove';
      this.setText('해지하기')
      return;
    }
    this.mode = 'add';
    this.setText('구독하기')
  }

  updateState({ mediaId, isSubscribed }: { mediaId: number; isSubscribed: boolean }) {
    this.setMediaId(mediaId);
    this.updateMode(isSubscribed);
  }
}
