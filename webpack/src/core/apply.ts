import { ElementRenderingTree } from "../interfaces/ElementRenderingTree";
import { RenderingTree } from "../interfaces/RenderingTree";
import { SyncOptions } from "../interfaces/SyncOptions";
import { UseRenderingTree } from "../interfaces/UseRenderingTree";
import { getTypeOfRenderingTree } from "./nDom";

export function applyRenderingTreeToDom(
  root: HTMLElement,
  renderingTree: RenderingTree,
  prevRenderingTree: RenderingTree | undefined
) {
  function replace(newNode: Node) {
    root.replaceChildren(newNode);
  }

  sync({
    target: root.firstChild,
    replace,
    renderingTree,
    prevRenderingTree,
  });
}

function dispose(renderingTree: RenderingTree) {
  if (typeof renderingTree === "string") {
    return;
  }
  if (renderingTree.type === "use") {
    renderingTree.dispose?.();
  }
  if ("children" in renderingTree) {
    renderingTree.children.forEach(dispose);
  }
}

function sync({
  target,
  replace,
  renderingTree,
  prevRenderingTree,
}: SyncOptions) {
  if (
    prevRenderingTree &&
    getTypeOfRenderingTree(prevRenderingTree) !==
      getTypeOfRenderingTree(renderingTree)
  ) {
    dispose(prevRenderingTree);
  }

  if (typeof renderingTree === "string") {
    if (target?.nodeType !== Node.TEXT_NODE) {
      return replace(createNode(renderingTree, prevRenderingTree));
    }

    if (target.textContent !== renderingTree) {
      target.textContent = renderingTree;
    }
    return;
  }

  switch (renderingTree.type) {
    case "element":
      if (
        !(target instanceof HTMLElement) ||
        target.tagName !== renderingTree.tagName
      ) {
        return replace(createNode(renderingTree, prevRenderingTree));
      }
      syncElement(target, renderingTree, prevRenderingTree);
      break;
    case "use": {
      if (
        prevRenderingTree instanceof Object &&
        prevRenderingTree?.type === "use"
      ) {
        const isDependenciesChanged =
          prevRenderingTree.dependencies.length !==
            renderingTree.dependencies.length ||
          prevRenderingTree.dependencies.some(
            (d, i) => d !== renderingTree.dependencies[i]
          );
        if (isDependenciesChanged) {
          prevRenderingTree.dispose?.();
          renderingTree.dispose = renderingTree.useFn() || undefined;
        } else {
          renderingTree.dispose = prevRenderingTree.dispose;
        }
      } else {
        renderingTree.dispose = renderingTree.useFn() || undefined;
      }

      function childrenSync(child: RenderingTree, index: number) {
        sync({
          target,
          replace,
          renderingTree: child,
          prevRenderingTree:
            prevRenderingTree instanceof Object &&
            "children" in prevRenderingTree
              ? prevRenderingTree.children[index]
              : undefined,
        });
      }

      renderingTree.children.forEach(childrenSync);
    }
  }
}

function createNode(
  renderingTree: Exclude<RenderingTree, UseRenderingTree>,
  prevRenderingTree: RenderingTree | undefined
): Node {
  if (typeof renderingTree === "string") {
    return document.createTextNode(renderingTree);
  }
  switch (renderingTree.type) {
    case "element": {
      const element = document.createElement(renderingTree.tagName);

      syncElement(element, renderingTree, prevRenderingTree);
      return element;
    }
  }
}

function syncElement(
  element: HTMLElement,
  renderingTree: ElementRenderingTree,
  prevRenderingTree: RenderingTree | undefined
) {
  syncAttributes(element, renderingTree.attrs);
  syncChildren(
    element,
    renderingTree.children,
    prevRenderingTree instanceof Object && "children" in prevRenderingTree
      ? prevRenderingTree.children
      : undefined
  );
}

function syncAttributes(target: HTMLElement, attrs: Record<string, string>) {
  for (const [key, value] of Object.entries(attrs)) {
    if (target.getAttribute(key) !== value) {
      target.setAttribute(key, value);
    }
  }
}

function syncChildren(
  target: HTMLElement,
  children: RenderingTree[],
  prevChildren: RenderingTree[] | undefined
) {
  const removingChildrenCount = target.children.length - children.length;
  for (let i = 0; i < removingChildrenCount; i++) {
    target.lastChild!.remove();
  }

  for (let i = 0; i < children.length; i++) {
    const childNode = target.childNodes[i]!;
    const renderingTree = children[i];

    if (!renderingTree) {
      continue;
    }
    function replace(newNode: Node) {
      if (childNode) {
        target.replaceChild(newNode, childNode);
      } else {
        target.appendChild(newNode);
      }
    }

    sync({
      target: childNode,
      replace,
      renderingTree,
      prevRenderingTree: prevChildren?.[i],
    });
  }
}
