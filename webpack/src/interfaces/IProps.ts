import { IEventFunction } from "./IEventFunction";

export interface IProps extends Record<string, string | IEventFunction > {}
