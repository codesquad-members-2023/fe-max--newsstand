import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";

const { ul, li, h2, a } = CreateFakeElementHelper;

export function Rolling(): IFakeElement {
  return li([
    h2({ class: "blind" }, "연합뉴스 헤드라인"),
    ul({ class: "rolling" }, [
      li([
        a({ class: "outlet", href: "" }, "연합뉴스"),
        a(
          { class: "article", href: "" },
          "[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출"
        ),
      ]),
    ]),
  ]);
}
