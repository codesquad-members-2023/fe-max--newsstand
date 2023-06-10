import { Header } from "./src/components/Header";
import { IFakeElement } from "./src/interfaces/IFakeElement";
import { CreateFakeElementHelper } from "./src/utils/CreateFakeElementHelper";

const { div } = CreateFakeElementHelper;

export const App: IFakeElement = (() => {
  
  return div([Header()]);
})();
