import { Header } from "./src/components/Header";
import { IFakeElement } from "./src/interfaces/IFakeElement";
import { CreateFakeElementHelper } from "./src/utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export function App(): IFakeElement {
  return div([Header()]);
}
