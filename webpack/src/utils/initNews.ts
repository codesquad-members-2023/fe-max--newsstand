import { Config } from "../../config";
import { Store } from "../core/Store";
import { INews } from "../interfaces/INews";
import { IPress } from "../interfaces/IPress";
import { newsService } from "../services/newsService";

export async function initNews() {
  Store.state.news = (await newsService()) as INews;
  Store.state.mainPress = Store.state.news["주요언론사"];
  Store.state.subscribePress = {} as Record<string, boolean>;
  Store.state.mainPress.map((press: IPress) => {
    Store.state.subscribePress[press.name] = false;
  });
  Store.state.gridPageLimit = Math.ceil(
    Store.state.mainPress.length / Config.GRID_ROW / Config.GRID_COL
  );
  let listLimit = 0;
  let pressArr = [] as IPress[];
  Object.values(Store.state.news).forEach((press) => {
    if (Array.isArray(press)) {
      listLimit += press.length;
      pressArr = [...pressArr, ...press];
    }
  });
  Store.state.listLimit = listLimit;
  Store.state.pressArr = pressArr;
}
