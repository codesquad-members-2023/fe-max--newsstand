const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.naver.com/", { waitUntil: "networkidle0" });

  let newsHeadlines = [];
  for (let i = 0; i < 10; i++) {
    await page.waitForTimeout(3100);

    const result = await page.evaluate(() => {
      let elements = document.querySelectorAll(".ContentHeaderSubView-module__news_box___dH9b3");

      if (elements[1]) {
        let press = elements[1].querySelector(
          ".ContentHeaderSubView-module__news_media___YJm6A"
        ).innerText;
        let link = elements[1]
          .querySelector(".ContentHeaderSubView-module__news_title___wuetX > a")
          .getAttribute("href");
        let title = elements[1].querySelector(
          ".ContentHeaderSubView-module__news_title___wuetX > a"
        ).innerText;

        return { press, title, link };
      }

      return null;
    });

    if (result) {
      newsHeadlines.push(result);
    }
  }

  fs.writeFileSync("rolling.json", JSON.stringify(newsHeadlines, null, 2));
  console.log("rolling 끝");
  await browser.close();
}

run();
