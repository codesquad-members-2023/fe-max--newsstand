import { Component } from '../core/Component';

export class Header extends Component {
  constructor(target: HTMLElement) {
    super(target);
  }

  getTemplate(): string {
    return `
      <div class="header__title">
        <img src="../../../asset/symbol/logo.svg" alt="logo" />
        <span>뉴스스탠드</span>
      </div>
      <div class="header__date">
        <span>2023. 02. 10. 금요일</span>
      </div>
    `;
  }
}
