import { getListData } from './GridStore';
import { $$ } from '../../../util/util';

type mediaInfo = {
  category: string;
  imgSrc: string;
  imgAlt: string;
  editTime: string;
};

function setGrid() {
  const arr: Array<mediaInfo> = [];
  getListData().forEach((item: any) => arr.push(item.mediaInfo));
  shuffle(arr);

  const grid = $$('.grid__items');

  for (let i = 0; i < grid.length; i++) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', arr[i].imgSrc);
    newImg.setAttribute('alt', arr[i].imgAlt);
    grid[i].appendChild(newImg);
  }
}

function shuffle(array: Array<mediaInfo>): Array<mediaInfo> | undefined {
  if (!Array.isArray(array)) return;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { setGrid };
