import fetch from "node-fetch";

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.text();
  } else {
    throw new Error("Failed to fetch data");
  }
};
