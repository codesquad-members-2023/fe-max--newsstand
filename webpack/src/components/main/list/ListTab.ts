import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";

export function ListTab(): IFakeElement {
  const { li, div, a, span } = CreateFakeElementHelper;

  return li({ class: "tab active" }, [
    div({ class: "progress-bar" }, [
      div({
        class: "fill",
        style: "--index: 3; --total-count: 81",
        dataIndex: "3",
        dataTotalCount: "",
      }),
      a({ class: "category", href: "" }, [
        span({ class: "name" }, "종합경제"),
        span({ class: "fraction" }, "3 / 81"),
      ]),
    ]),
  ]);
}
