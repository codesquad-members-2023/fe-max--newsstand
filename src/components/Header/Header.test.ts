/**
 * @jest-environment jsdom
 */
import { Header } from './Header';

const mockHeaderState = new Date();

describe('Header test', () => {
  it('kr 포맷에 맞게 날짜 리턴', async () => {
    const mockDate = new Date('2023.06.16');
    const header = new Header(mockHeaderState);

    expect(header.getCurrentDate(mockDate)).toBe('2023. 06. 16. 금요일');
  });
});
