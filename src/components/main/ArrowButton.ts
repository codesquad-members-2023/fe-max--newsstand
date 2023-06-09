import { createElement } from '../../utils/domUtils';
import style from './Main.module.css'

export class ArrowButton {

  public readonly element;
  private arrow;

  constructor(direction: 'left' | 'right') {
    this.element = createElement('a', { href: '#', class: style[`${direction}_arrow`] });
    this.arrow = createElement('img', { src: `assets/icons/${direction}_arrow.svg` });

    this.element.append(this.arrow);
  }
}