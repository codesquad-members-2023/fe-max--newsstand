import { Config } from "../../config";
import { Store } from "../core/Store";
import { IPress } from "../interfaces/IPress";
import { newsService } from "../services/newsService";

export async function initNews() {
  Store.state.news = await newsService();
  Store.state.mainPress = Store.state.news["주요언론사"];
  Store.state.subscribePress = {} as Record<string, boolean>;
  Store.state.mainPress.map((press: IPress) => {
    Store.state.subscribePress[press.name] = false;
  });
  Store.state.gridPageLimit = Math.ceil(
    Store.state.mainPress.length / Config.GRID_ROW / Config.GRID_COL
  );
}
