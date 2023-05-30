import { App } from "./component/App";
import { store } from "./Store";
const state = store.getState();
const app = new App(state);

app.renderApp();
