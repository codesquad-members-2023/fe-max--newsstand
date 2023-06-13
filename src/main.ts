import "./css/index.css";

import { App } from "./App";
import { Header } from "./components/header/Header";
import { Roller } from "./components/roller/Roller";
import { Media } from "./components/media/Media";
import { errorMessages } from "./constants/errorMessages";

const BASE_URL = "http://localhost:8080";

export type Images = { src: string; alt: string }[];

const fetchAPI = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const shuffleArray = (target: Images) => {
  for (let i = target.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j]!, target[i]!];
  }
  return target;
};

const fetchHeadlinesData = async () => {
  try {
    const data = await fetchAPI(BASE_URL + "/headlines");
    return data.headlines;
  } catch (error) {
    console.error(`${errorMessages.fetchHeadlinesFailed}`, error);
  }
};

const fetchPressData = async () => {
  try {
    const totalPressData = await fetchAPI(BASE_URL + "/list");
    const pressImageData = totalPressData.flatMap((item: any) =>
      item.pressList.map((item: any) => ({
        src: item.pressLogoSrc,
        alt: item.pressLogoAlt,
      }))
    );
    const randomImageData = shuffleArray(pressImageData);

    return { totalPressData, randomImageData };
  } catch (error) {
    console.error(`${errorMessages.initListNewsFailed}`, error);
  }
};

const initApp = async () => {
  App();

  Header();

  const headlines = await fetchHeadlinesData();
  Roller(headlines);

  const pressData = await fetchPressData();
  Media(pressData);
};

initApp();

// "[속보] 쿤디, \"돼지파스타 맛있어서 돼지된 것 같아...\"",
// "[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 \"이 맛 못끊어...\"",
