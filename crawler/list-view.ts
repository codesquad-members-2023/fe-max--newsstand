import puppeteer from "puppeteer";
import fs from "fs";

interface Category {
  title: string;
  pressList: Press[];
}

interface Press {
  pressLogoSrc: string;
  pressLogoAlt: string;
  lastEditted: string;
  mainArticle: {
    thumbnailSrc: string;
    thumbnailAlt: string;
    mainArticleTitle: string;
  };
  subArticles: string[];
}

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://www.naver.com/");
  await page.click(".ContentPagingView-module__btn_view_list___j7eNR");

  // Scrape
  const categorizedPressArticles: Category[] = [];

  // Grab all categories.
  const categories = await page.$$(
    ".MediaOptionView-module__link_item___hLsuM"
  );

  //-- Create Press List for each category --//
  for (let i = 0; i < categories.length; i++) {
    // Category Name
    const categoryName = (await (
      await (await categories[i].$(
        ".MediaOptionView-module__text___I1Ka_"
      ))!.getProperty("innerText")
    ).jsonValue()) as string;

    // Number of press for this category
    const numPressInnerText = (await await (
      await (
        await page.$(".ContentPagingView-module__total___HUvt2")
      )?.getProperty("innerText")
    )?.jsonValue()) as string;

    const regex = /\d+$/g;
    const match = regex.exec(numPressInnerText)!;
    const numPress = parseInt(match[0]);

    // List of Press
    const pressList: Press[] = [];

    //-- Create Press Object for each press in this category --//
    for (let j = 0; j < numPress; j++) {
      // Grab the press info
      const pressInfoContainer = await page.$(
        ".MediaNewsView-module__news_top___YCAPy"
      );
      const pressLogoSrc = (await (
        await (await pressInfoContainer?.$("img"))?.getProperty("src")
      )?.jsonValue()) as string;
      const pressLogoAlt = (await (
        await (await pressInfoContainer?.$("img"))?.getProperty("alt")
      )?.jsonValue()) as string;
      const lastEditted = (await (
        await (
          await pressInfoContainer?.$(".MediaNewsView-module__time___zS8dM")
        )?.getProperty("innerText")
      )?.jsonValue()) as string;

      // Grab the main article
      const mainArticleContainer = await page.$(
        ".MediaNewsView-module__desc_left___UbO08"
      );
      const thumbnailSrc = (await (
        await (await mainArticleContainer?.$("img"))?.getProperty("src")
      )?.jsonValue()) as string;
      const thumbnailAlt = (await (
        await (await mainArticleContainer?.$("img"))?.getProperty("alt")
      )?.jsonValue()) as string;
      const mainArticleTitle = (await (
        await (
          await mainArticleContainer?.$(
            ".MediaNewsView-module__desc_title___s0li5"
          )
        )?.getProperty("innerText")
      )?.jsonValue()) as string;

      const mainArticle = {
        thumbnailSrc,
        thumbnailAlt,
        mainArticleTitle,
      };

      // Grab the subarticles
      const subArticles: string[] = [];

      const subArticlesContainer = await page.$(
        ".MediaNewsView-module__desc_right___xDQVv"
      );
      const subArticleItems = await subArticlesContainer?.$$(
        ".MediaNewsView-module__link_item___XI2W1"
      )!;
      for (let subArticle of subArticleItems) {
        const subArticleTitle = (await await (
          await subArticle.getProperty("innerText")
        ).jsonValue()) as string;

        subArticles.push(subArticleTitle);
      }

      // Push press to `pressList`
      const press: Press = {
        pressLogoSrc,
        pressLogoAlt,
        lastEditted,
        mainArticle,
        subArticles,
      };
      pressList.push(press);

      // Move on to next press
      if (j < numPress - 1) {
        const nextPressBtn = await page.$(
          ".ContentPagingView-module__btn_next___ZBhby"
        );
        await nextPressBtn?.click();
      }
    }

    // Push `pressList` to `categorizedPressArticles`
    categorizedPressArticles.push({
      title: categoryName,
      pressList,
    });

    // Move on to (click) next category.
    if (i < categories.length - 1) {
      await categories[i + 1].click();
    }
  }

  // Close browser.
  await browser.close();

  // Output JSON file.
  fs.writeFileSync("list-view.json", JSON.stringify(categorizedPressArticles));
  console.log("Crawl successful");
})();
