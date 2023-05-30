import "./components/index.ts";
import "./styles/index.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <news-stand></news-stand>
  </div>
`;
