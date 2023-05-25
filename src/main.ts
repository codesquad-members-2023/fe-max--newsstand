import "./components/index.ts";
import "./styles/index.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <news-stand></news-stand>
`;
