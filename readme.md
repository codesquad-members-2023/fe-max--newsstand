# 뉴스스탠드

기획서링크: https://www.figma.com/proto/y9oNoSgpBtkbCEg9R6x59R/FE_%EB%89%B4%EC%8A%A4%EC%8A%A4%ED%83%A0%EB%93%9C?page-id=11%3A2&node-id=11%3A1923&viewport=303%2C128%2C0.5&scaling=contain&starting-point-node-id=11%3A1923
디자인 링크: https://www.figma.com/file/y9oNoSgpBtkbCEg9R6x59R/FE_%EB%89%B4%EC%8A%A4%EC%8A%A4%ED%83%A0%EB%93%9C?node-id=0%3A1&t=Z9lcqx66VyQ194aT-1

## 1주차 프론트엔드 빌드와 데이터 구성

## 목표

- [ ]  HTML, CSS로 뉴스스탠드 구성
- [ ]  크롤링을 통하여 데이터 가져오기

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
- 최신로고 자동롤링
    - 5초마다 자동으로 무한 롤링
    - 애니메이션
    - 호버시 일시정지
- 언론사별 기사 확인
    - 그리드로 구성
    - 구독하기 및 해지하기 버
- 각 분야 카테고리 언론사 기사 확인
- 선택된 카테고리 이름열 언론사 개수와 순서를 표시
- 한언론사당 20초 간의 언론사 내용을 표시
