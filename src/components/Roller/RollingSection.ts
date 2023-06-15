import { Component } from '../../Component';
import { NewsRoller } from './NewsRoller';
import { store } from '../..';

export class RollingSection extends Component {
  newsRollerLeft: HTMLDivElement;
  newsRollerRight: HTMLDivElement;

  constructor(props) {
    super(props);
    this.render();
    this.mount();

    store.subscribe(() => {
      this.newsRollerLeft.update(store.getState().leftRoller);
    });

    store.subscribe(() => {
      this.newsRollerRight.update(store.getState().rightRoller);
    });
  }

  render() {
    this.element = document.createElement('section');
    this.element.classList.add('auto-rolling__area');
  }

  mount() {
    this.newsRollerLeft = new NewsRoller(this.props.leftRoller, 'left');
    this.newsRollerRight = new NewsRoller(this.props.rightRoller, 'right');

    this.element.append(this.newsRollerLeft.element, this.newsRollerRight.element);
  }

  mapStateToProp(state) {
    this.props = state;
  }
}
