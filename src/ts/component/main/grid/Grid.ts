import { $, $$ } from '../../../util/util';

type gridInfo = {
  src: string;
  alt: string;
};

async function fetchGridData() {
  const res = await fetch('http://localhost:8080/grid');
  const gridData = await res.json();
  return gridData;
}

const COUNT_PER_GRID = $$('.grid__items').length;

export async function addEvent() {
  const gridData = await fetchGridData();

  const leftBtn = $('.grid__left');
  const rightBtn = $('.grid__right');
  const arr: Array<gridInfo> = [];
  const maxPage = await setMaxPage();
  let counter = 1;

  gridData.forEach((item: gridInfo) => arr.push(item));
  shuffle(arr);
  setGrid(arr, counter);

  hideArrow(leftBtn, rightBtn, counter);

  leftBtn.addEventListener('click', () => {
    if (counter !== 1) {
      counter--;
    }

    hideArrow(leftBtn, rightBtn, counter);
    setGrid(arr, counter);
  });

  rightBtn.addEventListener('click', () => {
    if (counter !== maxPage) {
      counter++;
    }

    hideArrow(leftBtn, rightBtn, counter);
    setGrid(arr, counter);
  });
}

async function hideArrow(leftBtn: HTMLElement, rightBtn: HTMLElement, counter: number) {
  const maxPage = await setMaxPage();

  if (counter === 1) {
    leftBtn.classList.add('hide');
  } else {
    leftBtn.classList.remove('hide');
  }

  if (counter === maxPage) {
    rightBtn.classList.add('hide');
  } else {
    rightBtn.classList.remove('hide');
  }
}

async function setMaxPage() {
  const gridData = await fetchGridData();
  return Math.ceil(gridData.length / COUNT_PER_GRID);
}

export async function setGrid(arr: Array<gridInfo>, counter: number) {
  const grid = $$('.grid__items');
  const gridData = await fetchGridData();

  for (let i = 0; i < grid.length; i++) {
    const pressCount = i + COUNT_PER_GRID * (counter - 1);
    const isOverLength = pressCount >= gridData.length;
    const img = grid[i].querySelector('img');

    if (!isOverLength) {
      if (!img) {
        const newImg = document.createElement('img');
        grid[i].appendChild(newImg);
      }

      const curImg = grid[i].querySelector('img');
      curImg?.setAttribute('src', arr[pressCount].src);
      curImg?.setAttribute('alt', arr[pressCount].alt);
    }

    if (isOverLength) {
      img?.remove();
    }
  }
}

function shuffle(array: Array<gridInfo>): Array<gridInfo> {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
