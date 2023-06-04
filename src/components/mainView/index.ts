import { $ } from "@utils/domUtils";
import { MainView } from "./mainView";

export const initMainView = async () => {
  const mainView = new MainView();

  const $app = $("#app");
  $app.append(mainView.$mainView);
};
