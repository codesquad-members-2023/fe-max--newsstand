import gridData from '../db/grid.json';

export const getGridImgs = () => {
  for (let i = gridData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridData[i], gridData[j]] = [gridData[j], gridData[i]];
  }
  return gridData;
}