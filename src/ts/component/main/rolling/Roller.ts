import { $ } from '../../../common/util';
import { State, RollingItem, Roller } from '../../../common/types';
import { store } from '../../../store';
import { ACTION } from '../../../actions';
import { dispatch } from '../../../dispatch';

export function initRoller(state: State) {
  setInitRoller(state.roller);
  initRollerTick();
  store.subscribe('roller', setRoller);
}

function setArticle(container: HTMLElement, list: RollingItem[], index: number) {
  const article = container.querySelectorAll('a');

  article[0].setAttribute('href', list[index % 5].link);
  article[0].textContent = list[index % 5].title;

  article[1].setAttribute('href', list[(index + 1) % 5].link);
  article[1].textContent = list[(index + 1) % 5].title;
}

function setInitRoller(state: Roller) {
  setArticle($('.left__article__wrapper'), state.leftRollingList, 0);
  setArticle($('.right__article__wrapper'), state.rightRollingList, 0);
}

export function setRoller(state: Roller) {
  setArticle($('.left__article__wrapper'), state.leftRollingList, state.rollerTick);
  setArticle($('.right__article__wrapper'), state.rightRollingList, state.rollerTick);
}

function initRollerTick() {
  setInterval(() => {
    dispatch({ type: ACTION.INCREASE_TICK });
  }, 3000);
}
