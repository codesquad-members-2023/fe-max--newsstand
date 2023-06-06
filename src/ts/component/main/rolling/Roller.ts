import { $ } from '../../../common/util';
import { State } from '../../../common/types';
import { ACTION } from '../../../actions';
import { dispatch } from '../../../dispatch';

export class Roller {
  constructor(private state: State) {
    this.setInitRoller(this.state);
    this.initRollerTick();
  }

  setInitRoller(state: State) {
    const leftRollingWrapper = $('.left__article__wrapper');
    const leftArticle = leftRollingWrapper.querySelectorAll('a');

    leftArticle[0].setAttribute('href', state.leftRollingList[0].link);
    leftArticle[0].textContent = state.leftRollingList[0].title;

    leftArticle[1].setAttribute('href', state.leftRollingList[1].link);
    leftArticle[1].textContent = state.leftRollingList[1].title;

    const rightRollingWrapper = $('.right__article__wrapper');
    const rightArticle = rightRollingWrapper.querySelectorAll('a');

    rightArticle[0].setAttribute('href', state.rightRollingList[0].link);
    rightArticle[0].textContent = state.rightRollingList[0].title;

    rightArticle[1].setAttribute('href', state.rightRollingList[1].link);
    rightArticle[1].textContent = state.rightRollingList[1].title;
  }

  setLeftRoller(state: State) {
    const leftRollingWrapper = $('.left__article__wrapper');
    const leftArticle = leftRollingWrapper.querySelectorAll('a');

    leftArticle[0].setAttribute('href', state.leftRollingList[state.rollerTick % 5].link);
    leftArticle[0].textContent = state.leftRollingList[state.rollerTick % 5].title;

    leftArticle[1].setAttribute('href', state.leftRollingList[(state.rollerTick + 1) % 5].link);
    leftArticle[1].textContent = state.leftRollingList[(state.rollerTick + 1) % 5].title;
  }

  setRightRoller(state: State) {
    const rightRollingWrapper = $('.right__article__wrapper');
    const rightArticle = rightRollingWrapper.querySelectorAll('a');

    rightArticle[0].setAttribute('href', state.rightRollingList[state.rollerTick % 5].link);
    rightArticle[0].textContent = state.rightRollingList[state.rollerTick % 5].title;

    rightArticle[1].setAttribute('href', state.rightRollingList[(state.rollerTick + 1) % 5].link);
    rightArticle[1].textContent = state.rightRollingList[(state.rollerTick + 1) % 5].title;
  }

  initRollerTick() {
    setInterval(() => {
      dispatch({ type: ACTION.INCREASE_TICK });
    }, 3000);
  }
}
