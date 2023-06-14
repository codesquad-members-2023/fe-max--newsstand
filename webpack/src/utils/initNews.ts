import { Store } from "../core/Store";
import { newsService } from "../services/newsService";

export async function initNews() {
  Store.state.news = await newsService();
}
