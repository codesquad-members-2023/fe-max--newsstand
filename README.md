# fe-max--newsstand

## Table of Contents

- [Dev Log](#dev-log)
  - [Moving Away from `HTMLTemplateElement`](#moving-away-from-htmltemplateelement)
  - [`static` Methods on Custom Components](#static-methods-on-custom-components)
  - [Props/State Mechanism](#propsstate-mechanism)

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

### `static` Methods on Custom Components

- Create the DOM first, then pass it on to `super()` (`Component`).
  - Cannot call `this.createDOM()`, so make `createDOM` a static method.
- For methods that are not specific to a single instance, make them static.

### Props/State Mechanism

- Props/State mechanism is unidirectional.
  - View --> Dispatch --> Reducer --> Store --> View
- Store uses an observer mechanism where changes to a particular state in the store will trigger the `setProps` callbacks of each observer component with the new state.
- Components that directly receive data from the store receive it through `setProps` method that they provide to the store.
  - Components use the `setProps` to receive props and do whatever it needs to.
    - Ex: pass on the props to child components.
    - Ex: update/render its UI based on the received props.
- "Dumb" components receive props from parent component through the use of `data-*` attributes and the `attributeChangedCallback` lifecycle callback for simplicity.
  - Using `data-*` attributes to pass around props requires DOM access and parsing. Therefore, it is ideal to use it for data that is not too big and/or doesn't change too frequently.
