import { OneLineNews } from '../types';
import { NewsRoller } from './NewsRoller';

export class RollingSection {
  element: HTMLElement;
  props: OneLineNews[];

  constructor(props: OneLineNews[]) {
    this.props = props;
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');

    const leftHeadLines = this.getHeadLineList(props, 'left');
    const rightHeadLines = this.getHeadLineList(props, 'right');

    const newsRollerLeft = new NewsRoller(leftHeadLines, 'left');
    const newsRollerRight = new NewsRoller(rightHeadLines, 'right');

    this.element.append(newsRollerLeft.element, newsRollerRight.element);
  }

  getHeadLineList(oneLineData: OneLineNews[], position: string) {
    if (position === 'left') {
      return oneLineData.filter((item, idx) => {
        if (idx % 2 === 0) {
          return true;
        }
      });
    }
    if (position === 'right') {
      return oneLineData.filter((item, idx) => {
        if (idx % 2 === 1) {
          return true;
        }
      });
    }
  }
}
