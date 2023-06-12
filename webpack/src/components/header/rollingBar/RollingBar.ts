import { setContext } from "../../../hooks/setContext";
import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { Rolling } from "./Rolling";

const { ul } = CreateFakeElementHelper;

export function RollingBar(): IFakeElement {
  return ul(setContext("rollingIndex"), { class: "rolling-bar" }, [
    Rolling({ direction: "LEFT" }),
    Rolling({ direction: "RIGHT" }),
  ]);
}
