import { getToday } from '../ts/component/header/Header';

describe('오늘 날짜 반환 테스트', () => {
  it('yyyy. mm. dd. 0요일 형식으로 반환한다', async () => {
    const mockDate = new Date('2023.06.14');
    getToday(mockDate);

    expect(getToday(mockDate)).toBe('2023. 06. 14. 수요일');
  });
});
