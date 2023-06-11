import { FakeElementArgs } from "../types/FakeElementArgs";
import { IFakeElement } from "./IFakeElement";

export interface ICreateFakeElementHelper {
  [tagName: string]: (...args: FakeElementArgs[]) => IFakeElement;
}
