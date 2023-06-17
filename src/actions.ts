import { dispatch } from "./dispatcher";
import { getNewsList } from "./utils/dataUtils";

export const fetchNewsData = async (index: number = 0, category: string = '') => {
  dispatch({
    type: 'initNewsData',
    payload: {
      news: await getNewsList(index, category)
    }
  });
};