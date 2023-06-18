import { Header } from './Header/Header';
import { RollingSection } from './Roller/RollingSection';
import { Main } from './Main/Main';
import { Component } from '../Component';
import { NewsStandState } from '../utils/types';

export class NewsStand extends Component {
  constructor(props: NewsStandState) {
    super(props);
    this.render();
    this.mount();
  }

  render() {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';
  }

  mount() {
    const header = new Header(this.props.systemDate);
    const rollingSection = new RollingSection(this.props);
    const main = new Main(this.props);

    this.element.append(header.element, rollingSection.element, main.element);
  }
}
