const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: "true"});
  const page = await browser.newPage();
  await page.goto('https://www.naver.com');

  const rollingNews = [];
  await page.waitForSelector('.ContentHeaderSubView-module__news_media___YJm6A');

  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve,3000))

    const data = await page.evaluate(() => {
      const media = document.querySelector('.ContentHeaderSubView-module__news_media___YJm6A');
      const news = document.querySelector('.ContentHeaderSubView-module__news_title___wuetX > a');
      
      return {
        media: media.textContent,
        mediaUrl: media.href,
        news: news.textContent,
        newsUrl: news.href
      }
    })
    rollingNews.push(data);
  }

  fs.writeFileSync('rolling.json', JSON.stringify(rollingNews, null, '\t'));
  console.log('rolling.json 생성 완료');

  await browser.close();
})();
