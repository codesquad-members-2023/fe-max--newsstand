import { initHeader } from "@components/header";
import { initRollingNewsBar } from "@components/rollingNewsBar";

const init = () => {
  initHeader();
  initRollingNewsBar();
};

document.addEventListener("DOMContentLoaded", init);
