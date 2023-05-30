import { initHeader } from "@components/header";
import { initRollingNewsBar } from "@components/rollingNewsBar";
import { initMainView } from "@components/mainView";

const init = () => {
  initHeader();
  initRollingNewsBar();
  initMainView();
};

document.addEventListener("DOMContentLoaded", init);
