import puppeteer, { Page, Frame } from "puppeteer";
import { parse } from "node-html-parser";
import { HTMLElement } from "node-html-parser";
import { PressData } from "../interface/PressData";
import { ArticleData } from "../interface/ArticleData";

async function getSnbTabQueries(page: Page): Promise<string[]> {
  const snbTabQueries: string[] = [];

  if (!process.env.NEWS_STAND_URL) {
    throw new Error("Newsstand is not supported yet");
  }

  await page.goto(process.env.NEWS_STAND_URL, {
    waitUntil: "networkidle0",
  });

  const indexContent = await page.content();
  const $ = parse(indexContent);
  const $snb = $.getElementById("snb")!;
  const $ul = $snb.getElementsByTagName("ul")[0];
  $ul.querySelectorAll("li").forEach((li: HTMLElement) => {
    const className = li.getAttribute("class");
    snbTabQueries.push(`.${className} a`);
  });

  return snbTabQueries;
}

function panelElementToBrandData(elem: HTMLElement): PressData {
  const $panelInner = elem.querySelector(".panel_inner")!;
  const $h3 = $panelInner.querySelector("h3")!;
  const $a = $h3.querySelector("a")!;
  const $img = $h3.querySelector("img")!;
  const href = $a.getAttribute("href")!;
  const src = $img.getAttribute("src")!;
  const pressData: PressData = {
    mark: src,
    name: $img.getAttribute("alt")!,
    link: href,
  };

  return pressData;
}

async function getPageAndParse(page: Page): Promise<HTMLElement> {
  const content = await page.content();
  return parse(content);
}

async function getArticlesData(frame: Frame | null): Promise<ArticleData[]> {
  const articles: ArticleData[] = [];

  if (!frame) return articles;
  await frame.waitForSelector("body");
  const frameContent = await frame.$eval("body", (body) => body.innerHTML);
  const $frame = parse(frameContent);
  const $frameAnchors = $frame.querySelectorAll("a");

  $frameAnchors.forEach((anchor: HTMLElement) => {
    const img = anchor.querySelector("img");
    const content = anchor.textContent
      .trim()
      .replace(/[\r\n]+/g, " ")
      .replace(/\s+/g, " ");
    if (!content) {
      return;
    }
    const data: ArticleData = {
      link: anchor.getAttribute("href")!,
      content,
      hasImg: img !== null,
      img: img ? img.getAttribute("src")! : "",
    };
    articles.push(data);
  });

  return articles;
}

async function getCategoryPressData(
  page: Page,
  $: HTMLElement
): Promise<PressData[]> {
  const categoryBrandData: PressData[] = [];
  const $spot = $.querySelector(".spot")!;
  const clickCount = parseInt(
    $spot.querySelector(".nav_count")!.textContent.match(/\d+/)![0]
  );

  for (let i = 1; i <= clickCount; i++) {
    const $ = await getPageAndParse(page);
    const $panel = $.getElementById("focusPanelCenter")!;
    const pressData = panelElementToBrandData($panel);
    const frameElement = await page.$("#focusPanelCenter .ifr_arc");

    pressData.articles = await getArticlesData(frameElement ? await frameElement.contentFrame() : null);
    categoryBrandData.push(pressData);

    if (i !== clickCount) {
      await Promise.all([page.click("._btn_nxt"), page.waitForTimeout(1000)]);
    }
  }
  return categoryBrandData;
}

export async function getNewsData(): Promise<{ [key: string]: PressData[] }> {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(600000);

  const snbTabQueries = await getSnbTabQueries(page);
  const newsData: { [key: string]: PressData[] } = {};

  for (let snbTabQuery of snbTabQueries) {
    try {
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle0" }),
        page.click(snbTabQuery),
      ]);

      const $ = await getPageAndParse(page);
      const category = $.querySelector("#snb strong")!.textContent;

      newsData[category] = await getCategoryPressData(page, $);
    } catch (err) {
      console.error(`Failed to click on ${snbTabQuery}: ${err}`);
    }
  }

  await browser.close();
  return newsData;
}
