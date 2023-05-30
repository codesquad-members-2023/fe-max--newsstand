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
  const recentHeadlinesData: { pressName: string; headlineTitle: string }[] =
    [];

  for (let i = 0; i < 10; i++) {
    // Wait a bit.
    await new Promise((resolve) => setTimeout(resolve, 3100));

    // Get press and headline title.
    const recentHeadlinesContainer = await page.$(
      ".ContentHeaderSubView-module__news_box___dH9b3"
    );

    const pressName = (await (
      await (
        await recentHeadlinesContainer?.$(
          ".ContentHeaderSubView-module__news_media___YJm6A"
        )
      )?.getProperty("innerText")
    )?.jsonValue()) as string;

    const headlineTitle = (await (
      await (
        await page.$(".ContentHeaderSubView-module__news_title___wuetX")
      )?.getProperty("innerText")
    )?.jsonValue()) as string;

    // Push to `recentHeadlines`.
    recentHeadlinesData.push({ pressName, headlineTitle });
  }
  console.log(recentHeadlinesData);

  // Close browser.
  await browser.close();

  // Output JSON file.
  fs.writeFileSync(
    "recent-headlines.json",
    JSON.stringify(recentHeadlinesData)
  );
  console.log("Crawl successful");
})();
