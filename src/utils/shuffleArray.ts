export const shuffleArray = (array: any[]) => {
  const arr = array.slice();

  for (let index = arr.length - 1; index > 0; index -= 1) {
    const randomPosition = Math.floor(Math.random() * (index + 1));

    [arr[index], arr[randomPosition]] = [arr[randomPosition], arr[index]];
  }

  return arr;
};
