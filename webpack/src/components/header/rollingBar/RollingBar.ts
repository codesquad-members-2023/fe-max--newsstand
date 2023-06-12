import { IFakeElement } from "../../../interfaces/IFakeElement";
import { CreateFakeElementHelper } from "../../../utils/CreateFakeElementHelper";
import { Rolling } from "./Rolling";


const { ul } = CreateFakeElementHelper;

export function RollingBar(): IFakeElement {
  return ul({ class: "rolling-bar" }, [Rolling(), Rolling()]);
}
