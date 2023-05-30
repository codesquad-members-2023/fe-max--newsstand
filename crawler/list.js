const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: "true"});
  const page = await browser.newPage();
  await page.goto('https://www.naver.com');
  await page.click('.ContentPagingView-module__btn_view_list___j7eNR')

  const news = [];
  await page.waitForSelector('.MediaNewsView-module__media_news___unhXU');

  for (let i = 0; i < 246; i++) {
    const data = await page.evaluate(() => {
      const top = document.querySelector('.MediaNewsView-module__news_top___YCAPy');
      const mediaLogo = top.querySelector('.MediaNewsView-module__news_logo___MQbz7 > img');
      const editInfo = top.querySelector('.MediaNewsView-module__time___zS8dM');
      
      const mainNews = document.querySelector('.MediaNewsView-module__desc_left___UbO08');
      const mainImg = mainNews.querySelector('img');
      const mainText = mainNews.querySelector('.MediaNewsView-module__desc_title___s0li5')

      const subNews = document.querySelector('.MediaNewsView-module__desc_right___xDQVv');
      const subTitles = subNews.querySelectorAll('.MediaNewsView-module__link_item___XI2W1');

      const category = document.querySelector('.ContentPagingView-module__point___U2tUD');

      return {
        mediaInfo: {
          imgSrc: mediaLogo.src,
          imgAlt: mediaLogo.alt,
          editInfo: editInfo.textContent
        },
        mainContent: {
          imgSrc: mainImg.src,
          imgAlt: mainImg.alt,
          mainTitle: mainText.textcontent
        },
        subContent: {
          subNewsList: Array.from(subTitles).map((title) => {
            return {
              title: title.textContent,
              url: title.href
            }
          })
        },
        category: category.textContent.replace(' 언론사 뉴스', '')
      }
    })
    news.push(data);
    await page.click('.ContentPagingView-module__btn_next___ZBhby');
    await new Promise((resolve) => setTimeout(resolve,100))
  }

  fs.writeFileSync('list.json', JSON.stringify(news, null, '\t'));
  console.log('list.json 생성 완료');

  await browser.close();
})();
