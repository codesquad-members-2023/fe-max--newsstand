import { ArticleData } from "./ArticleData";

export interface PressData {
  mark: string;
  name: string;
  link: string;
  articles?: ArticleData[];
}