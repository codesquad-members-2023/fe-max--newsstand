import { Header } from "./src/components/Header";
import { Main } from "./src/components/Main";
import { Store } from "./src/core/Store";
import { TagHelper } from "./src/core/TagHelper";
import { State } from "./src/interfaces/State";

export const App = (store: Store<State>) => {
  const { date } = store.state;
  const { div } = TagHelper;
  return div({ class: "container" }, [Header({ date }), Main()]);
};
