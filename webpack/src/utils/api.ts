export async function getRollingNews() {
  const res = await fetch(`/api/rolling`);
  return res.ok ? await res.json() : { news: [] };
}
