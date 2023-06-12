export class Component {
  element: HTMLElement;
  props;

  constructor(props) {
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
