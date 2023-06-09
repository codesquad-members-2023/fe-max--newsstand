import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://www.naver.com/");

  // Scrape
  const pressData: { src: string | undefined; alt: string | undefined }[] = [];

  // Click on "뉴스스탠드" tab.
  const newsStandTab = await page.$(
    ".ContentHeaderView-module__tab_text___IuWnG"
  );
  newsStandTab?.click();

  // Make sure page is on entire press view.
  const allOrSubscribedPressBtn = await page.$(
    ".ContentHeaderSubView-module__btn_more___HnWNR"
  );
  const currAllOrSubscribedView = await (
    await allOrSubscribedPressBtn?.getProperty("textContent")
  )?.jsonValue();

  if (currAllOrSubscribedView !== "전체언론사") {
    allOrSubscribedPressBtn?.click(); // open select options
    const optionBtn = await allOrSubscribedPressBtn?.$(
      ".ContentHeaderSubView-module__link_more___MNUTv"
    );
    optionBtn?.click(); // click on "전체언론사 보기"
  }

  for (let i = 0; i < 4; i++) {
    const pressBoxes = await page.$$(
      ".MediaSubscriptionView-module__subscription_box___YshKW"
    );

    for (let pressBox of pressBoxes) {
      const img = await pressBox.$("img");
      const src = await img?.getProperty("src");
      const alt = await img?.getProperty("alt");

      pressData.push({
        src: await src?.jsonValue(),
        alt: await alt?.jsonValue(),
      });
    }

    const nextBtn = await page.waitForSelector(
      ".ContentPagingView-module__btn_next___ZBhby"
    );

    if (i < 3) {
      nextBtn?.click();
    }
  }

  // Close browser.
  await browser.close();

  // Output JSON file.
  fs.writeFileSync("grid-view.json", JSON.stringify(pressData));
  console.log("Crawl successful");
})();
