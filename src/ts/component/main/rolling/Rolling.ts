import rollingData from '../../../../../server/rolling.json';
import { $ } from '../../../util/util';

type rollingInfo = {
  media: string;
  title: string;
  link: string;
};

function getRollingArr() {
  const arr: Array<rollingInfo> = [];
  rollingData.forEach((value: rollingInfo) => arr.push(value));

  const leftArr = [...arr].splice(0, arr.length / 2);
  const rightArr = [...arr].splice(arr.length / 2);

  return { leftArr, rightArr };
}

export function setRolling(count: number) {
  const leftRollingArr = getRollingArr().leftArr;
  const rightRollingArr = getRollingArr().rightArr;

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
