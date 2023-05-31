# 뉴스스탠드

기획서링크: https://www.figma.com/proto/y9oNoSgpBtkbCEg9R6x59R/FE_%EB%89%B4%EC%8A%A4%EC%8A%A4%ED%83%A0%EB%93%9C?page-id=11%3A2&node-id=11%3A1923&viewport=303%2C128%2C0.5&scaling=contain&starting-point-node-id=11%3A1923
디자인 링크: https://www.figma.com/file/y9oNoSgpBtkbCEg9R6x59R/FE_%EB%89%B4%EC%8A%A4%EC%8A%A4%ED%83%A0%EB%93%9C?node-id=0%3A1&t=Z9lcqx66VyQ194aT-1

## 1주차 프론트엔드 빌드와 데이터 구성

## 목표

- [x]  HTML, CSS로 뉴스스탠드 구성
- [x]  크롤링을 통하여 데이터 가져오기

## 프로그래밍

### 데이터 획득하기

1. 네이버 뉴스스탠드 사이트에서 뉴스 데이터를 가져온다
    - 크롤링 코드
        
        ```jsx
        import fetch from "node-fetch";
        import { load } from "cheerio";
        
        fetch("https://newsstand.naver.com/")
          .then((response) => response.text())
          .then((html) => {
            const $ = load(html);
        
            console.log(html);
        
            // 크롤링할 내용을 선택자를 사용하여 추출
            const newsTitles = $("a.news_tit")
              .map((index, element) => {
                return $(element).text();
              })
              .get();
        
            // 추출한 데이터 출력
            newsTitles.forEach((title) => {
              console.log(title);
            });
          })
          .catch((error) => {
            console.log(error);
          });
        ```
        
2. javascript 로 DOM API를 활용해서 브라우저 콘솔에서 직접 가져온다.
    - 다른방식으로 크롤링을 해도 된다.
    - 가져온 데이터는 JSON 형식에 맞춰서 JSON데이터로 구성한다.
    - 크롤링한 코드도 커밋하고 소스파일로 관리한다.

---

1. 자바스크립트로 서버를 따로 구성한뒤 크롤링한 정보를 전달하는 api를 만든다
2. 해당 api를 사용하여 데이터를 전달받아 화면에 제공한다.


## 설계

### feature list

- 데이터크롤링
- 옵저버
- 웹 페이지와 연결을 확인
- 로고클릭시 페이지 새로고침
- 최신 자동롤링
    - 5초마다 자동으로 무한 롤링
    - 애니메이션
    - 호버시 일시정지
- 언론사별 기사 확인
    - 그리드로 구성
    - 구독하기 및 해지하기 버튼
- 각 분야 카테고리 언론사 기사 확인
- 선택된 카테고리 이름열 언론사 개수와 순서를 표시
- 한언론사당 20초 간의 언론사 내용을 표시



## 기술스택
프로그래밍 언어: TypeScript
백엔드 라이브러리: Express
유틸리티 라이브러리: dotenv (환경 변수 관리), node-fetch (HTTP 요청)
빌드 도구: Vite

## 2주차 비동기제어와 WAS 구현

## 목표
- [ ] 기존의 vite를 사용하며 사용한 클라이언트 사이드 랜더링 방식을 서버 사이드 앤더링 방식으로 교체한다.
- [ ] template engine을 활용하여 기존에 index.html을 재구성한다
- [ ] 그리드 UI을 구현한다
- [ ] 좌우페이지 이동을 구현한다.
- [ ] 세션을 활용하여 구독 및 해지정보들을 관리할 방법을 정하고 적용시킨다.
- [ ] 그리드 UI에 구독/해지 기능을 추가한다.

## 학습계획
- GPT에 예시코드들을 물어봐서 한번씩 실행해보고 파악해 본 후에 구현한다.

- vite ssr 예시코드
```javascript
const express = require('express');
const { createServer: createViteServer } = require('vite');

async function createServer() {
  const app = express();

  // Vite에서 개발 모드를 만듭니다.
  const vite = await createViteServer({
    server: { middlewareMode: 'html' },
  });

  // Vite 미들웨어를 사용합니다. 이 미들웨어는 /@hmr에 연결하거나
  // index.html을 가져오거나 fs 모듈을 불러옵니다.
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      // Vite에서 템플릿을 렌더링합니다.
      const template = fs.readFileSync('/index.html', 'utf-8');
      const render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
      const html = render(template, url);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // 오류가 발생하면, Vite는 HMR에 대한 오류를 자동으로 보냅니다.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000);
}

createServer();
```

## 기술스택(구현 과정 중 추가 삭제 예정)
프로그래밍 언어: TypeScript, JavaScript (ES6+)
백엔드 프레임워크: Express.js
HTTP 요청 라이브러리: node-fetch
HTML 파싱 라이브러리: node-html-parser
템플릿 엔진: ejs
로깅 라이브러리: morgan
디버깅 라이브러리: debug
에러 핸들링 라이브러리: http-errors
쿠키 파싱 라이브러리: cookie-parser
빌드 및 변환 도구: Babel
개발용 서버 도구: Nodemon, @babel/node