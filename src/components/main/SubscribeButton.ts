import { invoke } from '@/store';
import { createElement } from '@utils/domUtils';

export default class SubscribeButton {
  public readonly element;
  private buttonText;
  private mediaName: string = '';
  private mode: 'add' | 'remove' = 'add';

  constructor() {
    const button = createElement('a', { href: '#', class: 'subscribe-button font-body-xs' });
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
          name: this.mediaName,
          mode: this.mode
        }
      });
    });
  }

  private setText(newText: string) {
    this.buttonText.textContent = newText;
  }

  private setmediaName(mediaName: string) {
    this.mediaName = mediaName;
  }

  private updateMode(isSubscribed: boolean) {
    if (isSubscribed) {
      this.mode = 'remove';
      this.setText('해지하기');
      return;
    }
    this.mode = 'add';
    this.setText('구독하기');
  }

  updateView({ mediaName, isSubscribed }: { mediaName: string; isSubscribed: boolean }) {
    this.setmediaName(mediaName);
    this.updateMode(isSubscribed);
  }
}
