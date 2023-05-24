export class Component {
  private target: HTMLElement;

  constructor(target: HTMLElement) {
    this.target = target;
    this.render();
  }

  getTemplate(): string {
    return '';
  }

  render(): void {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate());
  }
}
