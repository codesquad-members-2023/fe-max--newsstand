import { checkEnvVar } from "./checkEnvVar";
import { loadJSON } from "./loadJSON";

export async function getDummyNewsData() {
  const fileName = checkEnvVar("DUMMY_FILENAME");
  if (!fileName) throw new Error();
  const data = await loadJSON(fileName);
  return data;
}
