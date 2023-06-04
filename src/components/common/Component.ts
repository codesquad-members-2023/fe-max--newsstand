export default class Component extends HTMLElement {
  constructor(dom: HTMLElement) {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleResetLink = document.createElement("link");
    styleResetLink.rel = "stylesheet";
    styleResetLink.href = "src/styles/reset.scss";
    shadowRoot.append(styleResetLink, dom);
  }

  static createStylesheetLink(url: string) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    return link;
  }

  public setProps(_newState: {}) {}
}
