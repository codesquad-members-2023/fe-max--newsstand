import dispatcher from './Dispatcher';

export const Actions = {
  clickArrowBtn(direction: string) {
    dispatcher.dispatch({
      type: 'Click_Arrow_Btn',
      direction: direction,
    });
  },
  handleSubBtn(target: HTMLElement, display: string) {
    console.log(target, display);
    dispatcher.dispatch({
      type: 'Handle_Sub_Btn',
      target: target,
      display: display,
    });
  },
};
