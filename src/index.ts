import { App } from "./component/App";
import { store } from "./Store";
import { newsStandState } from "./utils/types";
const state = store.getState();
const app = new App({ ...state });

store.subscribe((props: newsStandState) => app.update(props));
app.renderApp();
