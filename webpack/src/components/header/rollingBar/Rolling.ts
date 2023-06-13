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

  return li(useContext("rollingIndex", "render", isUpdate), [
    h2({ class: "blind" }, "연합뉴스 헤드라인"),
    ul({ class: "rolling" }, [
      li([
        a({ class: "outlet", href: Config.YNA_URL }, "연합뉴스"),
        a({ class: "article", href: getRollingHref }, getRollingTextContent),
      ]),
    ]),
  ]);
}

function getRollingHref() {
  const index = Store.state.rollingIndex;
  const rolling = Store.state.rolling[index];
  return rolling.href;
}

function getRollingTextContent() {
  const index = Store.state.rollingIndex;
  const rolling = Store.state.rolling[index];
  return rolling.textContent;
}
