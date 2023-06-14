import fs from "fs/promises";
import { ArticleData } from "../interface/ArticleData";

export async function loadJSON(
  fileName: string
): Promise<ArticleData[] | null> {
  try {
    const jsonString = await fs.readFile(`${fileName}.json`, "utf8");
    const data = JSON.parse(jsonString) as ArticleData[];
    return data;
  } catch (e) {
    return null;
  }
}
