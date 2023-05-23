export default class Component extends HTMLElement {
  constructor(template: HTMLTemplateElement) {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleResetLink = document.createElement("link");
    styleResetLink.rel = "stylesheet";
    styleResetLink.href = "src/styles/reset.scss";
    shadowRoot.append(template.content.cloneNode(true), styleResetLink);
  }
}
