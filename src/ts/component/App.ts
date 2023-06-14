import { $ } from '../common/util';
import { initHeader } from './header/Header';
import { initRoller } from './main/rolling/Roller';
import { initAllGrid } from './main/grid/Grid';
import { initViewMode } from './main/viewMode/ViewMode';

import { store } from '../store';

export function App() {
  initHeader($('.header__title'), $('.date'));
  initRoller(store.getState());
  initAllGrid(store.getState().grid);
  initViewMode(store.getState());
}
