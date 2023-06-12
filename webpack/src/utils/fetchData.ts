export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
