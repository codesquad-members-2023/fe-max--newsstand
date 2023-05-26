export async function getRollingNews() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/rolling-news`);
  return res.ok ? await res.json() : { news: [] };
}
