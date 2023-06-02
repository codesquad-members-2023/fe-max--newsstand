import "./css/index.css";

import { Header, NewsDate } from "./components/header/Header";
import { Roller } from "./components/roller/Roller";

const header = Header();
header.setEvent();

const newsDate = NewsDate();
newsDate.render();

initRoller();

async function initRoller() {
  try {
    const headlines = await initHeadlinesData();

    const roller = Roller(headlines);
    roller.render();
    roller.setEvent();
    roller.startRolling();
  } catch (error) {
    console.error("헤드라인 정보를 가져오지 못했습니다.");
  }
}

async function initHeadlinesData() {
  const response = await fetch("http://localhost:8080/headlines");
  const data = await response.json();

  console.log(data.headlines);

  return data.headlines;
}

// "[속보] 쿤디, \"돼지파스타 맛있어서 돼지된 것 같아...\"",
// "[단독] 쿤디, 청년다방 오징어 튀김 중독됐다 \"이 맛 못끊어...\"",
