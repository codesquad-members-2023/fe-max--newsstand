import { HtmlTagFunction } from './HtmlTagFunction';
import { HtmlTagName } from '../constants/HtmlTag';

type HtmlTagUnion = keyof typeof HtmlTagName;

export type HtmlTagFunctions = {
  [K in HtmlTagUnion]: HtmlTagFunction;
};