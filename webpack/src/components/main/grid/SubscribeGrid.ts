import { Config } from "../../../../config";
import { Dispatcher } from "../../../core/Dispatcher";
import { Store } from "../../../core/Store";
import { useIter } from "../../../hooks/useEter";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { setTrimmedBackgroundImageUrl } from "../../../utils/setTrimmedBackgroundImageUrl";
import subscribe from "../../../images/subscribe.svg";
import unsubscribe from "../../../images/unsubscribe.svg";
import { IPress } from "../../../interfaces/IPress";
import { useContext } from "../../../hooks/useContext";

const { div, figure, img, figcaption, button } = CreateFakeElementHelper;

export function SubscribeGrid(): IFakeElement {
  return div(useContext("subscribePress", "render"), useIter(Row, 4), {
    id: "grid",
  });
}

function Row(index: number): IFakeElement {
  return div({ class: "row", dataIndex: `${index}` }, useIter(Col, 6));
}

function Col(index: number): IFakeElement {
  function setImageFunction(this: IFakeElement) {
    const rowIndex = this.parent!.props!.dataIndex;
    const colIndex = index;
    const cellData = getCellData(rowIndex, colIndex);
    if (!cellData) {
      this.children = [];
      return;
    }
    const { mark, name } = cellData;
    const isSubscribed = isSubscribe(name);

    this.children = [
      figure([
        img(
          function (this: IFakeElement, element: HTMLElement) {
            setTrimmedBackgroundImageUrl(element, mark);
          },
          { alt: "" }
        ),
        figcaption({ class: "blind" }, name),
      ]),
      div({ class: "cover" }, [
        button(
          {
            onClick: (e) => {
              const target = e!.currentTarget as HTMLElement;
              const img = target.querySelector("img");
              subscribePress(name);
              const isSubscribed = isSubscribe(name);
              img!.setAttribute("src", isSubscribed ? unsubscribe : subscribe);
              img!.setAttribute("alt", isSubscribed ? "해지하기" : "구독하기");
            },
          },
          [
            img({
              src: isSubscribed ? unsubscribe : subscribe,
              alt: isSubscribed ? "해지하기" : "구독하기",
            }),
          ]
        ),
      ]),
    ];
  }

  return div(setImageFunction, {
    class: "col",
    dataIndex: `${index}`,
  });
}

function getCellData(rowIndex: number, colIndex: number) {
  const unit = Config.GRID_ROW * Config.GRID_COL;
  const subscribeGridIndex = Store.state.subscribeGridIndex;
  const subscribedPress = getSubscribedPressArr().slice(
    subscribeGridIndex * unit
  );
  const index = rowIndex * Config.GRID_COL + colIndex;
  if (index >= subscribedPress.length) {
    return null;
  }
  return subscribedPress[index];
}

function isSubscribe(name: string) {
  return Store.state.subscribePress[name];
}

function subscribePress(name: string) {
  Dispatcher.onAction({ type: "subscribe", payload: name });
}

function getSubscribedPressArr() {
  const subscribePress = Store.state.subscribePress;
  return Store.state.mainPress.filter(
    (press: IPress) => subscribePress[press.name]
  );
}
