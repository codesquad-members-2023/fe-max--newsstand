import { State } from './utils/types';

export class Component {
  element: HTMLElement;

  readonly props;

  constructor(props: any) {
    this.props = props;
  }

  render(): void {}
  setEvent(): void {}
  mount(): void {}
}
