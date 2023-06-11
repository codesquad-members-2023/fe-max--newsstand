import { Header } from "./src/components/header/Header";
import { Main } from "./src/components/main/Main";
import { IFakeElement } from "./src/interfaces/IFakeElement";
import { IState } from "./src/interfaces/IState";
import { CreateFakeElementHelper } from "./src/utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export function App(state: IState): IFakeElement {

  

  return div([Header(), Main()]);
}
