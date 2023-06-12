import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export function Grid(): IFakeElement {
  return div({ id: "grid" }, [
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
    div({ class: "row" }, [
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
      div({ class: "col" }),
    ]),
  ]);
}
