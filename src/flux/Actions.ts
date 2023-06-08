import Dispatcher from './Dispatcher';

export const Actions = {
  clickArrowBtn(direction: string) {
    Dispatcher.dispatch({
      type: 'Click_Arrow_Btn',
      direction: direction,
    });
  },
};
