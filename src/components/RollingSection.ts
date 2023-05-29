import { NewsRoller } from './NewsRoller';

export class RollingSection {
  element: HTMLElement;

  constructor(props) {
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');

    const newsRollerLeft = new NewsRoller(props);
    const newsRollerRight = new NewsRoller(props);

    this.element.append(newsRollerLeft.element, newsRollerRight.element);
  }
}
