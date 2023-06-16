import { setContext } from "../../../hooks/setContext";
import { useIter } from "../../../hooks/useEter";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { Row } from "./Row";

const { div } = CreateFakeElementHelper;

export function Grid(): IFakeElement {
  return div(setContext("gridIndex"), useIter(Row, 4), {
    id: "grid",
  });
}
