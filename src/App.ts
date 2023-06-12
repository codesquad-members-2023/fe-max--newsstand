import { Component } from './Component';
import { NewsStand } from './components/NewsStand';

export class App extends Component {
  render() {
    this.element = document.querySelector('#app')!;
  }

  mount() {
    const newsStand = new NewsStand(this.props);
    this.element.append(newsStand.element);
  }
}
