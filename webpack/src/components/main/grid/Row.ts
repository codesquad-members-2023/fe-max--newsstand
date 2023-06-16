import { useIter } from "../../../hooks/useEter";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { Col } from "./Col";

const { div } = CreateFakeElementHelper;

export function Row(index: number): IFakeElement {
  return div({ class: "row", dataIndex: `${index}` }, useIter(Col, 6));
}
