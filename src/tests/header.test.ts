import { describe, expect, it } from 'vitest';
import Header from '../components/header/Header';

describe('Header component method test', () => {
  it('getDate 메서드는 입력한 날짜정보를 "yyyy. mm. dd. 요일" 형태로 반환한다.', () => {
    const date = new Date('2023 June 14');

    // when
    const header = new Header({ dateInfo: date });
    const result = header.getDate(date);

    // then
    expect(result).toBe("2023. 06. 14. 수요일");
  });
});
