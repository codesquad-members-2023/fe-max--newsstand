import { TagNames } from "../constants/TagNames";
import { ICreateFakeElementHelper } from "../interfaces/ICreateFakeElementHelper";
import { ITagName } from "../interfaces/ITagName";
import { FakeElementArgs } from "../types/FakeElementArgs";
import { TagName } from "../types/TagName";
import { createFakeElement } from "./createFakeElement";

function assignHelper(helper: ICreateFakeElementHelper, tagName: TagName) {
  helper[tagName] = (...args: FakeElementArgs[]) =>
    createFakeElement(tagName as ITagName, ...args);
}

export const CreateFakeElementHelper = (function () {
  const helper = {} as ICreateFakeElementHelper;
  Object.keys(TagNames).forEach((tagName) =>
    assignHelper(helper, tagName as TagName)
  );

  return helper;
})();
