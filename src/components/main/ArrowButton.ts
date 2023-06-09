import { invoke } from '../../main';
import { createElement } from '../../utils/domUtils';
import style from './Main.module.css';

export class ArrowButton {
  public readonly element;
  private arrow;
  private direction;

  constructor(direction: 'left' | 'right') {
    this.element = createElement('a', { href: '#', class: style[`${direction}_arrow`] });
    this.arrow = createElement('img', { src: `assets/icons/${direction}_arrow.svg` });
    this.direction = direction;

    this.element.append(this.arrow);

    this.setEvent();
  }

  updateView(props: {
    arrowInfo: {
      left: boolean;
      right: boolean;
    };
  }) {
    this.element.classList.toggle('no-display', !props.arrowInfo[this.direction]);
  }

  private setEvent() {
    this.element.addEventListener('click', () => {
      const arrowActionType = this.direction === 'left' ? 'onClickLeftArrow' : 'onClickRightArrow';
      invoke({
        type: arrowActionType
      });
    });
  }
}
