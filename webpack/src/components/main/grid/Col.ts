import { Config } from "../../../../config";
import { Store } from "../../../core/Store";
import { useContext } from "../../../hooks/useContext";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { setTrimmedBackgroundImageUrl } from "../../../utils/setTrimmedBackgroundImageUrl";

const { div, img } = CreateFakeElementHelper;

export function Col(index: number): IFakeElement {
  function setImageFunction(this: IFakeElement) {
    const rowIndex = this.parent!.props!.dataIndex;
    const colIndex = index;
    const cellData = getCellData(rowIndex, colIndex);
    if (!cellData) {
      this.children = [];
      return;
    }
    const { mark, name } = cellData;

    this.children = [
      img(
        function (this: IFakeElement, element: HTMLElement) {
          setTrimmedBackgroundImageUrl(element, mark);
        },
        { alt: name }
      ),
    ];
  }

  return div(useContext("gridIndex", "render"), setImageFunction, {
    class: "col",
    dataIndex: `${index}`,
  });
}

function getCellData(rowIndex: number, colIndex: number) {
  const unit = Config.GRID_ROW * Config.GRID_COL;
  const mainPress = Store.state.news["주요언론사"];
  const limit = mainPress.length;
  const start = Store.state.gridIndex * unit;
  const index = start + Config.GRID_ROW * rowIndex + colIndex;
  if (index >= limit) {
    return null;
  }
  return mainPress[index];
}
