import { Config } from "../../config";
import { fetchData } from "../utils/fetchData";

export async function rollingService() {
  try {
    const rolling = await fetchData(Config.API_URL + "rolling");
    return rolling.data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
