import { Component } from '../../Component';
import { NewsRoller } from './NewsRoller';
import { store } from '../..';
import { NewsStandState } from '../../utils/types';

export class RollingSection extends Component {
  newsRollerLeft: NewsRoller;
  newsRollerRight: NewsRoller;

  constructor(props: NewsStandState) {
    super(props);
    this.render();
    this.mount();
    this.componentDidMount();
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

  componentDidMount() {
    store.subscribe(() => {
      this.newsRollerLeft.update(store.getState().leftRoller);
    });

    store.subscribe(() => {
      this.newsRollerRight.update(store.getState().rightRoller);
    });

    // requestAnimationFrame(this.newsRollerLeft.rolling);
    // requestAnimationFrame(this.newsRollerRight.rolling);
  }
}
