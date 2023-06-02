export async function getRollingNews() {
  const res = await fetch(`/api/rolling-news`);
  return res.ok ? await res.json() : { news: [] };
}
