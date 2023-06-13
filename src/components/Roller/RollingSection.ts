import { Component } from '../../Component';
import { NewsRoller } from './NewsRoller';

export class RollingSection extends Component {
  constructor(props) {
    super(props);
    this.render();
    this.mount();
  }

  render() {
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');
  }

  mount() {
    const newsRollerLeft = new NewsRoller(this.props.leftRoller);
    const newsRollerRight = new NewsRoller(this.props.rightRoller);

    this.element.append(newsRollerLeft.element, newsRollerRight.element);
  }
}
