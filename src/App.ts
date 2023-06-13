import { Component } from './Component';
import { NewsStand } from './components/NewsStand';

export class App extends Component {
  constructor(props) {
    super(props);
    this.render();
    this.mount();
  }

  render() {
    this.element = document.querySelector('#app')!;
  }

  mount() {
    const newsStand = new NewsStand(this.props);
    this.element.append(newsStand.element);
  }
}
