import { RenderingTree } from "../../interfaces/RenderingTree";
import { Store } from "../Store";
import { applyRenderingTreeToDom } from "../apply";
import { onAction } from "./onAction";

export function setUp<TState, TAction>(
  root: HTMLElement,
  store: Store<TState>,
  stateToRenderingTree: (store: Store<TState>) => RenderingTree,
  updateStateOnAction: (store: Store<TState>, action: TAction) => void
) {
  let prevRenderingTree: RenderingTree | undefined;
  const onStateChanged = () => {
    const renderingTree = stateToRenderingTree(store);
    applyRenderingTreeToDom(root, renderingTree, prevRenderingTree);
    prevRenderingTree = renderingTree;
  };

  onAction.set((action: TAction) => {
    updateStateOnAction(store, action);
    onStateChanged();
  });

  onStateChanged();
}
