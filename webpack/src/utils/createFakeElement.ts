import { IChildren } from "../interfaces/IChildren";
import { IEventFunction } from "../interfaces/IEventFunction";
import { IFakeElement } from "../interfaces/IFakeElement";
import { IProps } from "../interfaces/IProps";
import { ITagName } from "../interfaces/ITagName";
import { Prop } from "../types/Prop";
import { FakeElementArgs } from "../types/FakeElementArgs";

export function createFakeElement(
  tagName: ITagName,
  ...args: FakeElementArgs[]
): IFakeElement {
  const fakeElement = {
    tagName,
  } as IFakeElement;

  args.forEach((arg) => assignFakeElement(fakeElement, arg));

  return fakeElement;
}

function assignFakeElement(
  fakeElement: IFakeElement,
  arg: FakeElementArgs
): void {
  if (Array.isArray(arg)) {
    fakeElement.children = arg;
    arg.forEach((child) => (child.parent = fakeElement));
  } else if (typeof arg === "string") {
    fakeElement.textContent = arg;
  } else if (typeof arg === "object") {
    fakeElement.props = arg;
  } else if (typeof arg === "function") {
    const func = arg.bind(fakeElement);
    if (fakeElement.functions) {
      fakeElement.functions.push(func);
    } else {
      fakeElement.functions = [func];
    }
  }
  fakeElement.render = function () {
    const { prevElement } = fakeElement;
    const newElement = render(fakeElement);

    if (prevElement) {
      prevElement.parentElement!.replaceChild(newElement, prevElement);
    }

    fakeElement.prevElement = newElement;
    return fakeElement.prevElement;
  };
}

function render(fakeElement: IFakeElement): HTMLElement {
  const { tagName, props, children, textContent, functions } = fakeElement;
  const element = document.createElement(tagName);
  functions &&
    functions.forEach((func: Function) => {
      const result = func(element);
      if (typeof result === "string") {
        element.textContent = result;
      }
    });
  props && defineProps(element, props);
  children && defineChildren(element, children);
  textContent && defineTextContent(element, textContent);
  return element;
}

function defineTextContent(element: HTMLElement, text: string) {
  element.textContent = text;
}

function defineChildren(element: HTMLElement, children: IChildren): void {
  children.forEach((child) => appendChildToElement(element, child));
}

function appendChildToElement(element: HTMLElement, child: IFakeElement): void {
  element.appendChild(child.render());
}

function defineProps(element: HTMLElement, props: IProps): void {
  Object.entries(props).forEach((prop) => defineProp(element, prop));
}

function defineProp(element: HTMLElement, prop: Prop) {
  const [name, value] = prop;
  if (name.startsWith("on")) {
    const eventName = name.slice(2).toLowerCase();
    element.addEventListener(eventName, value as IEventFunction);
    return;
  }

  if (name.startsWith("data")) {
    const dataName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    element.setAttribute(`data-${dataName}`, value as string);
    return;
  }

  if (typeof value === "function") {
    element.setAttribute(name, value());
    return;
  }

  element.setAttribute(name, value);
}
