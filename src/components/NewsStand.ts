import { Header } from './Header';
import { RollingSection } from './RollingSection';
import { Main } from './Main';

export class NewsStand {
  element: HTMLElement;
  header: Header;
  rollingSection: RollingSection;
  main: Main;

  constructor(props) {
    this.element = document.createElement('div');
    this.element.id = 'newsStand';

    this.header = new Header(props);
    this.rollingSection = new RollingSection(props);
    this.main = new Main(props);

    this.element.append(this.header.element, this.rollingSection.element, this.main.element);
  }
}
