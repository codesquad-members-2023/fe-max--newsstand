import { $ } from '../../../util/util';

type rollingInfo = {
  media: string;
  title: string;
  link: string;
};

async function fetchRollingData() {
  const res = await fetch('http://localhost:8080/rolling');
  const rollingData = await res.json();
  return rollingData;
}

async function setRollingArr() {
  const rollingData = await fetchRollingData();
  const rollingArr: Array<rollingInfo> = [];
  rollingData.forEach((value: rollingInfo) => rollingArr.push(value));

  return rollingArr;
}

export async function setRolling(count: number) {
  const rollingArr = await setRollingArr();

  const leftRollingArr = [...rollingArr].splice(0, rollingArr.length / 2);
  const rightRollingArr = [...rollingArr].splice(rollingArr.length / 2);

  const leftRollingWrapper = $('.left__article__wrapper');
  const rightRollingWrapper = $('.right__article__wrapper');

  const leftArticle = leftRollingWrapper.querySelectorAll('a');
  const rightArticle = rightRollingWrapper.querySelectorAll('a');

  leftArticle[0].setAttribute('href', leftRollingArr[count].link);
  leftArticle[0].textContent = leftRollingArr[count].title;

  rightArticle[0].setAttribute('href', rightRollingArr[count].link);
  rightArticle[0].textContent = rightRollingArr[count].title;

  if (count === 4) {
    count = -1;
  }

  leftArticle[1].setAttribute('href', leftRollingArr[count + 1].link);
  leftArticle[1].textContent = leftRollingArr[count + 1].title;

  rightArticle[1].setAttribute('href', rightRollingArr[count + 1].link);
  rightArticle[1].textContent = rightRollingArr[count + 1].title;
}
