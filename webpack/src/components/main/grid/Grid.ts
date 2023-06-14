import { useIter } from "../../../hooks/useEter";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export function Grid(): IFakeElement {
  return div(
    { class: "grid" },
    useIter(
      div({ class: "row" }, 
      useIter(
        div({ class: "col" }), 6)), 4)
  );
}
