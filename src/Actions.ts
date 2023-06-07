import NewsStandDispatcher from './NewsStandDispatcher';

export const Actions = {
  clickArrowBtn(direction: string) {
    NewsStandDispatcher.dispatch({
      type: 'Click_Arrow_Btn',
      direction: direction,
    });
  },
};
