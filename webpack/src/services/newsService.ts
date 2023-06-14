import { Config } from "../../config";
import { fetchData } from "../utils/fetchData";

export async function newsService() {
  try {
    const news = await fetchData(Config.API_URL + "news");
    return news;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
