import { TagNames } from "../constants/TagNames";
import { ICreateFakeElementHelper } from "../interfaces/ICreateFakeElementHelper";
import { ITagName } from "../interfaces/ITagName";
import { PropsOrChildrenOrTextContent } from "../types/PropsOrChildrenOrTextContent";
import { TagName } from "../types/TagName";
import { createFakeElement } from "./createFakeElement";

function assignHelper(helper: ICreateFakeElementHelper, tagName: TagName) {
  helper[tagName] = function (...args: PropsOrChildrenOrTextContent[]) {
    return createFakeElement(
      tagName as ITagName,
      ...(args as PropsOrChildrenOrTextContent[])
    );
  };
}

export const CreateFakeElementHelper = (function () {
  const helper = {} as ICreateFakeElementHelper;
  Object.keys(TagNames).forEach((tagName) =>
    assignHelper(helper, tagName as TagName)
  );

  return helper;
})();
