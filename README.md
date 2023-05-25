# fe-max--newsstand

## Table of Contents

- [Dev Log](#dev-log)
  - [Moving Away from `HTMLTemplateElement`](#moving-away-from-htmltemplateelement)

## Dev Log

### Moving Away from `HTMLTemplateElement`

#### Previous Approach

```ts
const template = document.createElement("template");
template.innerHTML = `
  <div>
    <span class="hello-span">Hello</span>
    <span>World</span>
  </div>
`;

class MyElement extends HTMLElement {
  helloSpan: HTMLElement;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true),

    this.helloSpan = this.querySelector(".hello-span")!; // non-null assertion
  }

  connectedCallback() {
    // do something with `this.helloSpan`.
  }
}

customElements.define("my-element", MyElement);
```

#### New Approach

```ts
class MyElement extends HTMLElement {
  helloSpan: HTMLElement;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const topElement = this.createDOM();
    shadowRoot.append(topElement);
  }

  connectedCallback() {
    // do something with `this.helloSpan`.
  }

  createDOM() {
    const div = document.createElement("div");

    const spanA = document.createElement("span");
    spanA.innerText = "Hello";
    spanA.className = "hello-span";
    const spanB = document.createElement("span");
    spanB.innerText = "World";

    this.helloSpan = spanA; // directly register the element.

    div.append(spanA, spanB);

    return div;
  }
}

customElements.define("my-element", MyElement);
```

##### Notes

- This approach assumes the use of `document.createElement("my-element")` instead of `<my-element></my-element>`, since the latter's reference cannot be captured directly (i.e. would have to use `querySelector`).
- If not using templates, is there any point in using Web Components then? Yes.
  - CSS encapsulation.
  - Lifecycle callbacks.
  - Each component conforms to `HTMLElement`. Therefore, standard DOM APIs work on them.

###### Pros

- I (and TS) can be sure that a particular element exists (no non-null assertion needed).

###### Cons

- Not very readable in terms of markup structure.
