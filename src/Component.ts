import { State } from './utils/types';

export class Component {
  element: HTMLElement;
  readonly props;

  constructor(props: State) {
    this.element;
    this.props = props;
    this.render();
    this.setEvent();
    this.mount();
  }

  render(): void {}
  setEvent(): void {}
  mount(): void {}
  update(): {};
}
