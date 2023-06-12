import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { ListTab } from "./ListTab";

export function ListTabs(): IFakeElement {
  const { ul } = CreateFakeElementHelper;

  return ul({ class: "tabs" }, [ListTab(), ListTab(), ListTab(), ListTab()]);
}
