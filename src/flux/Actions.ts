import dispatcher from './Dispatcher';

export const Actions = {
  clickArrowBtn(direction: string) {
    dispatcher.dispatch({
      type: 'Click_Arrow_Btn',
      direction: direction,
    });
  },
};
