import { Action } from "../interfaces/Action";
import { onAction } from "./dom/onAction";
export function invoke(action: Action) {
  onAction.get()(action);
}
