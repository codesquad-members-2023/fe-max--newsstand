import { HtmlParser } from "./../utils/HtmlParser";
import { ElementObj, ElementType, TextElementObj } from "./../utils/types";
export class Base {
  node: Element | null;
  htmlParser: HtmlParser;
  components: { [key: string]: HTMLElement } = {};
  constructor() {
    this.htmlParser = new HtmlParser();
    this.node = null;
  }

  render(template: string) {
    this.node = this.setTemplate(template);
  }

  setAttribute(attName: string, attValue: string, target: Element) {
    target.setAttribute(attName, attValue);
  }

  setChildren(...children: Base[]) {
    children.forEach((child) => {
      if (this.node && child.node) {
        this.node.appendChild(child.node);
      }
    });
  }

  setTemplate(template: string) {
    const elementData = this.htmlParser.getElements(template);
    const fragment = document.createDocumentFragment();
    if (elementData.length) {
      elementData.forEach((child) => {
        fragment.appendChild(this.createChild(child));
      });
    }

    return fragment.children[0];
  }

  createChild(child: ElementType) {
    const isElementObj = this.isElementObj(child);
    if (isElementObj) {
      const element = this.createElement(child);
      const children = child.children;
      if (children.length) {
        children.forEach((child) => {
          element.appendChild(this.createChild(child));
        });
      }
      return element;
    } else {
      const element = this.createTextElement(child.text);
      return element;
    }
  }

  isElementObj(obj: ElementType): obj is ElementObj {
    return obj.type === "element";
  }

  isTextElementObj(obj: ElementType): obj is TextElementObj {
    return obj.type === "text";
  }

  createElement(data: ElementObj) {
    const element = document.createElement(data.tagName);
    data.attributes.forEach((attr) => {
      if (attr.name === "data-component") {
        this.components[attr.value] = element;
      } else if (attr.name.startsWith("add")) {
        const type = attr.name.slice(3).toLowerCase();
        const handler = (this as any)[attr.value];

        if (handler && typeof handler === "function") {
          element.addEventListener(type, handler.bind(this));
        }
      } else {
        this.setAttribute(attr.name, attr.value, element);
      }
    });
    return element;
  }

  createTextElement(text: string | null | undefined) {
    const element = document.createTextNode(text || "");
    return element;
  }
}

