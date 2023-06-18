import puppeteer from 'puppeteer';
import fs from 'fs';

async function getListNewsDate() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.naver.com/', { waitUntil: 'networkidle0' });

  const listViewBtnSelector = '.ContentPagingView-module__btn_view_list___j7eNR';
  await page.click(listViewBtnSelector);

  const result = [];

  const newsCategoryList = await page.$$eval('.MediaOptionView-module__option_item___JQyW2', (elements) => {
    return elements.map((e) => e.textContent);
  });

  for (let i = 0; i < newsCategoryList.length; i++) {
    const newsData = {
      category: newsCategoryList[i],
      newsList: [],
    };

    const newsListNum = await page.$eval(
      '.ContentPagingView-module__total___HUvt2',
      (el) => el.textContent.match(/\d+/)[0],
    );

    for (let j = 0; j < newsListNum; j++) {
      const pressInfo = await page.$eval('.MediaNewsView-module__news_logo___MQbz7 > img', (el) => {
        return { logoURL: el.src, name: el.alt };
      });

      const lastEditedTime = await page.$eval('.MediaNewsView-module__time___zS8dM', (el) => el.textContent);
      const thumbnailURL = await page.$eval('.ImgView-module__content_img___QA0gl > img', (el) => el.src);

      const mainArticle = await page.$eval('.MediaNewsView-module__desc_title___s0li5', (el) => {
        return { title: el.textContent, link: el.href };
      });
      const subArticleList = await page.$$eval('.MediaNewsView-module__link_item___XI2W1', (el) => {
        return el.map((item) => {
          return { title: item.textContent, link: item.href };
        });
      });

      newsData.newsList.push({ pressInfo, lastEditedTime, thumbnailURL, mainArticle, subArticleList });
      await page.click('.ContentPagingView-module__btn_next___ZBhby');
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    console.log('done', newsCategoryList[i]);
    result.push(newsData);
  }

  await browser.close();

  const jsonData = JSON.stringify(result);
  fs.writeFileSync('server/data/listViewData.json', jsonData);
}

getListNewsDate();
