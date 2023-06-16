import { Dispatcher } from "../../core/Dispatcher";
import { CreateFakeElementHelper } from "../../utils/CreateFakeElementHelper";
import arrowLeft from "../../images/icon/arrow-left.svg";
import arrowRight from "../../images/icon/arrow-right.svg";
import { IFakeElement } from "../../interfaces/IFakeElement";

const { div, button, img } = CreateFakeElementHelper;

export function Control(): IFakeElement {
  return div({ class: "control" }, [
    button(
      {
        onClick: () => {
          Dispatcher.onAction({ type: "decGridPageIndex" });
        },
      },
      [img({ src: arrowLeft })]
    ),
    button(
      {
        onClick: () => {
          Dispatcher.onAction({ type: "addGridPageIndex" });
        },
      },
      [img({ src: arrowRight })]
    ),
  ]);
}
