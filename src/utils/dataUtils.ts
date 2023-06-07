export const getGridImgs = async ():Promise<GridImg[]> => {
  const response =  await fetch('http://localhost:3000/mediaBrands');
  return await response.json();
}

export const getHeadlineNews = async ():Promise<HeadlineNews[]> => {
  const response = await fetch('http://localhost:3000/headlineNews');
  return await response.json();
}

export const getSubscribedIds = () => {
  const subscribedIdsInStorage = localStorage.getItem('subscribedIds');
  if (subscribedIdsInStorage === null) {
    return [];
  }
  return JSON.parse(subscribedIdsInStorage);
}

export const setSubscribedIds = (subscribedIds:number[]) => {
  localStorage.setItem('subscribedIds', JSON.stringify(subscribedIds));
}