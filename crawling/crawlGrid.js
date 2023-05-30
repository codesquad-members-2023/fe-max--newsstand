import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.naver.com/', { waitUntil: 'networkidle0' });

  const gridViewData = [];

  for (let i = 0; i < 4; i++) {
    const data = await page.evaluate(() => {
      const gridItems = document.querySelectorAll('.MediaSubscriptionView-module__subscription_box___YshKW');

      return Array.from(gridItems).map((item) => {
        const img = item.querySelector('img');
        const pid = img.getAttribute('src').slice(-7, -3);

        return {
          pid: pid,
          logoURL: img.getAttribute('src'),
          name: img.getAttribute('alt'),
        };
      });
    });

    gridViewData.push(...data);
    await page.click('.ContentPagingView-module__btn_next___ZBhby');

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  fs.writeFileSync('gridData.json', JSON.stringify(gridViewData, null, 2));
  console.log('grid 끝');

  await browser.close();
}

run();
