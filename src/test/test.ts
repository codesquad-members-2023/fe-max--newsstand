import { hideArrow } from '../ts/component/main/grid/Grid';
import { getToday } from '../ts/component/header/Header';

describe('check date format', () => {
  it('yyyy. mm. dd. 0요일 형식으로 반환한다', () => {
    const mockDate = new Date('1997.04.25');

    expect(getToday(mockDate)).toBe('1997. 04. 25. 금요일');
  });
});

// function hideArrow(state: Grid) {
//   const leftBtn = $('.prev__grid');
//   const rightBtn = $('.next__grid');

//   const isFirstPage = state.curPage === 1;
//   const isLastPage = state.curPage === state.lastPage;

//   isFirstPage ? leftBtn.classList.add('hide') : leftBtn.classList.remove('hide');
//   isLastPage ? rightBtn.classList.add('hide') : rightBtn.classList.remove('hide');
// }

const leftBtn = document.querySelector('.prev__grid') as HTMLElement;
const rightBtn = document.querySelector('.next__grid') as HTMLElement;

describe('hide left arrow on grid mode', async () => {
  it('그리드 모드의 curPage가 첫페이지 & !마지막페이지 일 때 왼쪽 화살표만 사라진다', () => {
    const mockGrid = {
      allGrid: [],
      curPage: 1,
      lastPage: 3,
    };

    hideArrow(mockGrid);

    expect(leftBtn.classList.contains('hide')).toBe(true);
    expect(rightBtn.classList.contains('hide')).toBe(false);
  });
});
