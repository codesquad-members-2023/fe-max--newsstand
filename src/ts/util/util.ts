export function $(selector: string, node: Document = document): HTMLElement {
  return node.querySelector(selector) as HTMLElement;
}

export function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
