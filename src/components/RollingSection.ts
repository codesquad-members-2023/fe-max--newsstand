import { Component } from '../Component';
import { NewsRoller } from './NewsRoller';

export class RollingSection extends Component {
  render() {
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');
  }

  mount() {
    const newsRollerLeft = new NewsRoller(this.props);
    const newsRollerRight = new NewsRoller(this.props);

    this.element.append(newsRollerLeft.element, newsRollerRight.element);
  }
}
