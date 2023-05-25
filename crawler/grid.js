const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'true' });
  const page = await browser.newPage();
  await page.goto('https://www.naver.com');

  const brandMarks = [];

  for (let i = 0; i < 4; i++) {
    const data = await page.evaluate(() => {
      const newsStandGrid = document.querySelector(
        '.MediaSubscriptionView-module__subscription_group___B8kWW'
      );
      const imgs = newsStandGrid.querySelectorAll('img');

      return Array.from(imgs).map((img) => {
        return {
          src: img.src,
          alt: img.alt
        };
      });
    });

    brandMarks.push(
      ...data.map((d, index) => {
        return {
          id: brandMarks.length + index + 1,
          ...d
        };
      })
    );
    await page.click('.ContentPagingView-module__btn_next___ZBhby');
  }

  fs.writeFileSync('grid.json', JSON.stringify(brandMarks, null, '\t'));
  console.log('grid.json 생성 완료');

  await browser.close();
})();
