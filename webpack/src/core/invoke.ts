import { Action } from "../interfaces/Action";
import { onAction } from "./nDom";

export function invoke(action: Action) {
  onAction(action);
}
