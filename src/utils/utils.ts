export function shuffleArray(array: GridNewsData[]): GridNewsData[] {
  if (array.length < 2) {
    return array;
  }

  const newArray = array.filter(Boolean);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export async function fetchData(path: string) {
  const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/${path}`).then((res) => res.json());

  return data;
}

async function createState(): Promise<State> {
  const [oneLineNews, gridDataRaw, listData] = await Promise.all([
    fetchData('oneLineNews'),
    fetchData('gridData'),
    fetchData('listData'),
  ]);

  const gridData = shuffleArray(gridDataRaw);

  return {
    systemDate: new Date(),
    oneLineNews,
    gridData,
    listData,
  };
}
