import { Component } from "./Component";

interface RecipePayload {
  tagName?: string;
  attrs?: {
    [key: string]: string;
  };
  textContent?: string;
  children?: Recipe[];
}

export class Recipe {
  public tagName;
  public attrs;
  public children;
  public textContent;

  constructor(payload: RecipePayload = {}) {
    const { tagName, attrs = {}, textContent, children = [] } = payload;
    this.tagName = tagName;
    this.attrs = attrs;
    this.textContent = textContent;
    this.children = children;
  }

  cook() {
    const component = new Component(this.tagName);

    if (this.attrs) {
      Object.entries(this.attrs).forEach(([name, value]) => {
        component.element.setAttribute(name, value);
      });
    }

    if (this.textContent) {
      component.element.textContent = this.textContent;
    }

    if (this.children) {
      this.children.forEach((child) => {
        component.element.appendChild(child.cook().element);
      });
    }

    return component;
  }
}
