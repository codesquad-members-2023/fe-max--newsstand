import { Config } from "../../../../config";
import { Store } from "../../../core/Store";
import { useContext } from "../../../hooks/useContext";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";

const { ul, li, h2, a } = CreateFakeElementHelper;

export function Rolling({ direction }: { direction: string }): IFakeElement {
  function isUpdate(): boolean {
    const turn = Store.state.rollingTurn;
    return direction === turn;
  }
  return li([
    h2({ class: "blind" }, "연합뉴스 헤드라인"),
    ul({ class: "rolling" }, [
      li([
        a({ class: "outlet", href: Config.YNA_URL }, "연합뉴스"),
        a(
          useContext("rollingIndex", "prop", (element, context) => {
            if (isUpdate()) {
              const index = context;
              const rolling = Store.state.rolling[index];
              element.setAttribute("href", rolling.href);
              element.textContent = rolling.textContent;
            }
          }),
          { class: "article" }
        ),
      ]),
    ]),
  ]);
}
