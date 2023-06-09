import { Action } from "../../interfaces/Action";

function generateOnAction() {
  let _onAction: (action: Action) => void | undefined;

  function get() {
    if (!_onAction) {
      throw new Error("onAction is not set yet");
    }
    return _onAction;
  }

  function set(actionFn: (action: any) => void) {
    _onAction = actionFn;
  }

  return {
    get,
    set,
  };
}

export const onAction = generateOnAction();
