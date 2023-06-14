import { IChildren } from "../interfaces/IChildren";
import { IProps } from "../interfaces/IProps";
import { Callback } from "./Callback";

export type FakeElementArgs = IProps | IChildren | TextContent | Callback;
