import { Header } from "./src/components/header/Header";
import { Main } from "./src/components/main/Main";
import { IFakeElement } from "./src/interfaces/IFakeElement";
import { CreateFakeElementHelper } from "./src/utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export function App(): IFakeElement {
  return div([Header(), Main()]);
}
