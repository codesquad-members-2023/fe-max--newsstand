import { $ } from '../common/util';
import { Header } from './header/Header';
import { Roller } from './main/rolling/Roller';
import { Grid } from './main/grid/Grid';

import { store } from '../store';

export class App {
  constructor() {
    new Header($('.header__title'), $('.date'));

    this.initRoller();
    this.initGrid();
  }

  initRoller() {
    const roller = new Roller(store.getState());
    store.subscribe(roller.setLeftRoller);
    store.subscribe(roller.setRightRoller);
  }

  initGrid() {
    const grid = new Grid(store.getState());
    store.subscribe(grid.setGrid);
    store.subscribe(grid.hideArrow);
  }
}
