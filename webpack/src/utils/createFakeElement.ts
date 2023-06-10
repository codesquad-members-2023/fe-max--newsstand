import { IChildren } from "../interfaces/IChildren";
import { IEventFunction } from "../interfaces/IEventFunction";
import { IFakeElement } from "../interfaces/IFakeElement";
import { IProps } from "../interfaces/IProps";
import { ITagName } from "../interfaces/ITagName";
import { Prop } from "../types/Prop";
import { PropsOrChildrenOrTextContent } from "../types/PropsOrChildrenOrTextContent";

export function createFakeElement(
  tagName: ITagName,
  ...args: PropsOrChildrenOrTextContent[]
): IFakeElement {
  const fakeElement = {
    tagName,
  } as IFakeElement;

  args.forEach((arg) => assignFakeElement(fakeElement, arg));

  return fakeElement;
}

function assignFakeElement(
  fakeElement: IFakeElement,
  arg: PropsOrChildrenOrTextContent
): void {
  if (Array.isArray(arg)) {
    fakeElement.children = arg;
  } else if (typeof arg === "string") {
    fakeElement.textContent = arg;
  } else if (typeof arg === "object") {
    fakeElement.props = arg;
  }
  fakeElement.render = () => render(fakeElement);
}

function render(fakeElement: IFakeElement): Element {
  const { tagName, props, children, textContent } = fakeElement;
  const element = document.createElement(tagName);
  props && defineProps(element, props);
  children && defineChildren(element, children);
  textContent && defineTextContent(element, textContent);
  return element;
}

function defineTextContent(element: Element, text: string) {
  element.textContent = text;
}

function defineChildren(element: Element, children: IChildren): void {
  children.forEach((child) => appendChildToElement(element, child));
}

function appendChildToElement(element: Element, child: IFakeElement): void {
  element.appendChild(child.render());
}

function defineProps(element: Element, props: IProps): void {
  Object.entries(props).forEach((prop) => defineProp(element, prop));
}

function defineProp(element: Element, prop: Prop) {
  const [name, value] = prop;
  if (name.startsWith("on")) {
    const eventName = name.slice(2).toLowerCase();
    element.addEventListener(eventName, value as IEventFunction);
    return;
  }
  element.setAttribute(name, value as string);
}
 
