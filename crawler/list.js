const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com/", { waitUntil: "networkidle0" });
  await page.click(".ContentPagingView-module__btn_view_list___j7eNR");

  const newsData = [];

  for (let i = 0; i < 246; i++) {
    const data = await page.evaluate(() => {
      const info = document.querySelector(".MediaNewsView-module__news_top___YCAPy");
      const infoImg = info.querySelector("img");
      const imgSrc = infoImg.getAttribute("src");
      const imgAlt = infoImg.getAttribute("alt");
      const editTime = document.querySelector(".MediaNewsView-module__time___zS8dM").innerHTML;

      const mainContent = document.querySelector(".MediaNewsView-module__desc_left___UbO08");

      const mainContentImg = mainContent.querySelector("img");
      const mainImgSrc = mainContentImg.getAttribute("src");
      const mainImgAlt = mainContentImg.getAttribute("alt");
      const mainTitle = mainContent.querySelector(
        ".MediaNewsView-module__desc_title___s0li5"
      ).innerHTML;
      const category = document
        .querySelector(".ContentPagingView-module__point___U2tUD")
        .innerHTML.replace(" 언론사 뉴스", "");

      const newsTitle = document.querySelectorAll(".MediaNewsView-module__desc_item___zl2_Q");
      const titleList = Array.from(newsTitle).map((title) => {
        return title.querySelector("a").innerHTML;
      });

      return {
        mediaInfo: {
          category: category,
          imgSrc: imgSrc,
          imgAlt: imgAlt,
          editTime: editTime,
        },
        mainContent: {
          mainImgSrc: mainImgSrc,
          mainImgAlt: mainImgAlt,
          mainTitle: mainTitle,
        },
        subContent: {
          subNewsList: titleList,
        },
      };
    });

    newsData.push(data);
    await page.click(".ContentPagingView-module__btn_next___ZBhby");

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  fs.writeFileSync("list.json", JSON.stringify(newsData, null, 2));
  console.log("list 끝");

  await browser.close();
}

run();
