const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com/", { waitUntil: "networkidle0" });

  let newsData = [];

  for (let i = 0; i < 4; i++) {
    const data = await page.evaluate(() => {
      let boxes = document.querySelectorAll(
        ".MediaSubscriptionView-module__subscription_box___YshKW"
      );

      return Array.from(boxes).map((box) => {
        let img = box.querySelector("img");
        return {
          src: img.getAttribute("src"),
          alt: img.getAttribute("alt"),
        };
      });
    });

    newsData.push(...data);
    await page.click(".ContentPagingView-module__btn_next___ZBhby");

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  fs.writeFileSync("grid.json", JSON.stringify(newsData, null, 2));
  console.log("grid 끝");

  await browser.close();
}

run();
