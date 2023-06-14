import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { ListTabs } from "./ListTabs";
import outletSample from "../../../images/outlet-sample.svg";
import subscribe from "../../../images/subscribe.svg";

const { div, h3, img, p, input} =
  CreateFakeElementHelper;

export function List(): IFakeElement {
  return div({ id: "list" }, [
    ListTabs(),
    div({ class: "inner" }, [
      div({ class: "info" }, [
        h3([img({ src: outletSample, alt: "샘플" })]),
        p("2023.02.10. 18:27 편집"),
        input({ type: "image", src: subscribe, alt: "구독하기" }),
      ]),
    ]),
  ]);
}
