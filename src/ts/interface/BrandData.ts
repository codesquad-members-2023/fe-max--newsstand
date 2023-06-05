import { ArticleData } from "./ArticleData";

export interface BrandData {
  mark: string;
  name: string;
  link: string;
  articles?: ArticleData[];
}