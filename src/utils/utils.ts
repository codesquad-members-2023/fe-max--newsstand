import { newsData } from './types';

export function shuffleArray(array: newsData[]): newsData[] {
  if (array.length < 2) {
    return array;
  }

  const newArray = array.filter(Boolean);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export async function fetchData(path: string) {
  const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/${path}`).then((res) => res.json());

  return data;
}

export function divideNewsData(newsData: newsData[]) {
  const middleNum = newsData.length / 2;
  const leftRollerNews = newsData.slice(0, middleNum);
  const rightRollerNews = newsData.slice(middleNum);

  return [leftRollerNews, rightRollerNews];
}
