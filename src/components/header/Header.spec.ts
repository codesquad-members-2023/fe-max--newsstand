import { NewsDate } from "./Header";

// const header = Header()

test("NewsDate function returns correct format", () => {
  const date = NewsDate();
  const dateRegEx = /<div class="header__news-date">2023. 06. 13. 화요일<\/div>/;

  expect(date).toMatch(dateRegEx);
});
