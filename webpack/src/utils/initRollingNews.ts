// import { RollingNews, RollingNewsItem } from "../interfaces/RollingNews";
// import { getRollingNews } from "./api";
// import { getGlobalStore } from "./globalStore";

// export async function initRollingNews() {
//   const store = getGlobalStore();
//   const news = (await getRollingNews()).news;
//   const leftRollingNews: RollingNews = { news: [] };
//   const rightRollingNews: RollingNews = { news: [] };
//   news.forEach((newsItem: RollingNewsItem, index: number) => {
//     if (index % 2 === 0) {
//       leftRollingNews.news.push(newsItem);
//       return;
//     }
//     rightRollingNews.news.push(newsItem);
//   });
//   store.state.leftRollingNews = leftRollingNews;
//   store.state.rightRollingNews = rightRollingNews;
//   if (!store.state.fetchFirstRollingNews) {
//     store.state.fetchFirstRollingNews = true;
//   }
// }
