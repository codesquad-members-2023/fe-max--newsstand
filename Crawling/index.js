import fetch from "node-fetch";
import { load } from "cheerio";

fetch("https://newsstand.naver.com/")
  .then((response) => response.text())
  .then((html) => {
    const $ = load(html);

    console.log(html);

    // 크롤링할 내용을 선택자를 사용하여 추출
    const newsTitles = $("a.news_tit")
      .map((index, element) => {
        return $(element).text();
      })
      .get();

    // 추출한 데이터 출력
    newsTitles.forEach((title) => {
      console.log(title);
    });
  })
  .catch((error) => {
    console.log(error);
  });
