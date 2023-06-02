export const getGridImgs = async ():Promise<GridImg[]> => {
  const response =  await fetch('http://localhost:3000/mediaBrands');
  return await response.json();
}

export const getHeadlineNews = async ():Promise<HeadlineNews[]> => {
  const response = await fetch('http://localhost:3000/headlineNews');
  return await response.json();
}