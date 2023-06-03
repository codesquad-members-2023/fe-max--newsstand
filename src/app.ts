import "./css/index.css";

import { Header, NewsDate } from "./components/header/Header";
import { Roller } from "./components/roller/Roller";
import { subscribe } from "./store/store";
import { Media } from "./components/media/Media";
import { Grid } from "./components/media/Grid";

const header = Header();
header.setEvent();

const newsDate = NewsDate();
newsDate.render();

const initRoller = async () => {
  try {
    const headlines = await initHeadlinesData();
    const roller = Roller(headlines);
    roller.render();
    roller.setEvent();
    roller.startRolling();
  } catch (error) {
    console.error("헤드라인 정보를 가져오지 못했습니다.");
  }
};

initRoller();

const media = Media();
media.render();
media.setEvent();
subscribe(() => media.render());

const initGrid = async () => {
  try {
    const images = await initImages();
    const grid = Grid(images);

    subscribe(() => grid.render());
    subscribe(() => grid.renderButton());
    grid.setEvent();
  } catch (error) {
    console.error("이미지들을 가져오지 못했습니다.");
  }
};

initGrid();

async function initHeadlinesData() {
  const response = await fetch("http://localhost:8080/headlines");
  const data = await response.json();
  return data.headlines;
}

async function initImages() {
  const response = await fetch("http://localhost:8080/images");
  const data = await response.json();
  const images = data.images.map((image: imageData) => image.src);
  const shuffledImages = shuffleArray(images);
  return shuffledImages;
}
function shuffleArray(target: string[]) {
  for (let i = target.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j]!, target[i]!];
  }
  return target;
}

type imageData = {
  src: string;
  alt: string;
};

// "[속보] 쿤디, \"돼지파스타 맛있어서 돼지된 것 같아...\"",
// "[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 \"이 맛 못끊어...\"",
