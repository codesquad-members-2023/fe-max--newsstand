import { IArticle } from "./IArticle";

export interface IPress {
  mark: string;
  name: string;
  link: string;
  articles: IArticle[];
}
