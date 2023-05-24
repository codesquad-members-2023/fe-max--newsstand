import { $ } from '../util/util';
import { Component } from './core/Component';
import { Header } from './header/Header';

export class App extends Component {
  constructor(target: HTMLElement) {
    super(target);
    new Header($('.header'));
  }

  getTemplate(): string {
    return `
      <header class="header"></header>
      <main class="main">
        <section class="main-header"></section>
        <section class="main-rolling"></section>
        <section class="main-press"></section>
      </main>
    `;
  }
}
