import "@components/index.ts";
import "@styles/index.scss";
import "@store/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <news-stand></news-stand>
`;
