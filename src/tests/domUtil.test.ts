import { describe, expect, it } from 'vitest';
import { createElement } from '../utils/domUtils';

describe('domUtil createElement function test', () => {
  it('createElement 함수의 반환값의 태그이름은 첫 번째 인자와 같다.', () => {
    const tagName = 'DIV';

    const element = createElement(tagName);
    const resultTag = element.tagName;

    expect(resultTag).toBe(tagName);
  })
})