import "./css/index.css";

import { Header, NewsDate } from "./components/header/Header";
import { Roller } from "./components/roller/Roller";
import { subscribe } from "./store/store";
import { Media } from "./components/media/Media";
import { Grid, Images } from "./components/media/Grid";
import { List } from "./components/media/List";
import { errorMessages } from "./constants/errorMessages";

const BASE_URL = "http://localhost:8080";
const listNews = await initListNews();

const header = Header();
header.setEvent();

const newsDate = NewsDate();
newsDate.render();

const headlines = await fetchHeadlinesData();
const roller = Roller(headlines);
roller.render();
roller.setEvent();
roller.startRolling();

const media = Media();
media.render();
media.setEvent();
export const renderUnSubsAlert = media.renderUnSubsAlert;
subscribe(media.render);

const images = await fetchImages();
const grid = Grid(listNews.images);
grid.setEvent();
subscribe(grid.render);

// const listNews = await initListNews();
const list = List(listNews.data);
list.setEvent();
subscribe(list.render);
export const stopInterval = list.stopInterval;
export const startInterval = list.startInterval;

async function fetchHeadlinesData() {
  try {
    const response = await fetch(BASE_URL + "/headlines");
    const data = await response.json();
    return data.headlines;
  } catch (error) {
    console.error(`${errorMessages.fetchHeadlinesFailed}`, error);
    throw error;
  }
}

async function fetchImages() {
  try {
    const response = await fetch(BASE_URL + "/images");
    const data = await response.json();
    // console.log(data);
    const shuffledImages = shuffleArray(data.images);
    return shuffledImages;
  } catch (error) {
    console.error(`${errorMessages.fetchImagesFailed}`, error);
    throw error;
  }
}
function shuffleArray(target: Images) {
  for (let i = target.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j]!, target[i]!];
  }
  return target;
}

async function initListNews() {
  try {
    const response = await fetch(BASE_URL + "/list");
    const data = await response.json();
    console.log(data);
    const imageData = data.map((item: any) => item.pressList);

    const image = imageData.flatMap((itemArray: any[]) =>
      itemArray.map((item: any) => ({
        src: item.pressLogoSrc,
        alt: item.pressLogoAlt,
      }))
    );

    const images = shuffleArray(image)

    return { data, images };
  } catch (error) {
    console.error(`${errorMessages.initListNewsFailed}`, error);
    throw error;
  }
}

// "[속보] 쿤디, \"돼지파스타 맛있어서 돼지된 것 같아...\"",
// "[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 \"이 맛 못끊어...\"",
