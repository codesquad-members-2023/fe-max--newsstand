import Component from "./common/Component.ts";

const template = document.createElement("template");
template.innerHTML = `
  <main>
    <h1>News Stand</h1>
  </main>

  <!-- <link rel="stylesheet" href="src/components/NewsStand.scss"> -->
`;

class NewsStand extends Component {
  constructor() {
    super(template);
  }
}

customElements.define("news-stand", NewsStand);
