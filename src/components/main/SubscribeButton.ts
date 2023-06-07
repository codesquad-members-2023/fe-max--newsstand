import { invoke } from "../../main";
import { createElement } from "../../utils/domUtils";

export class SubscribeButton {
  public element;
  private buttonText;
  private mediaId: number = -1;
  private mode: 'add' | 'remove' = 'add';

  constructor() {
    const button = createElement('a', { href: '#', class: 'subscribe-button' });
    const icon = createElement('img', { src: 'assets/icons/plus-sm.svg', alt: '' });
    const buttonText = document.createTextNode('');

    button.append(icon, buttonText);

    this.element = button;
    this.buttonText = buttonText;

    this.setEvent();
  }

  private setEvent() {
    this.element.addEventListener('click', () => {
      invoke({
        type: 'updateSubscribedMedia',
        payload: {
          id: this.mediaId,
          mode: this.mode
        }
      });
    });
  }

  private setText(newText: string) {
    this.buttonText.textContent = newText;
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