export function $(selector: string, node: Document = document): HTMLElement {
  return node.querySelector(selector) as HTMLElement;
}

export function $$(selector: string, node: Document = document): NodeListOf<HTMLElement> {
  return node.querySelectorAll(selector) as NodeListOf<HTMLElement>;
}

export function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function render(container: HTMLElement, markup: string) {
  container.innerHTML = markup;
}
