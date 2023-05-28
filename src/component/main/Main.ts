import { Base } from "../Base";

export class Main extends Base {
  constructor() {
    super();
    this.render(`
        <main class="main">
            ${this.setTab()}
            ${this.setGrid()}
        </main>
    `);
  }

  setTab() {
    return `
        <div class="main__tab">
            <div class="main__tab__press">
                <div class="main__tab__press-all">전체 언론사</div>
                <div class="main__tab__press-subscribed">내가 구독한 언론사</div>
            </div>
            <div class="main__tab__buttons">
                <img class="main__tab__buttons-list" src="./src/assets/list.svg">
                <img class="main__tab__buttons-grid" src="./src/assets/grid-select.svg">
            </div>
        </div>
    `;
  }

  setGrid() {
    let items = "";
    for (let i = 0; i < 24; i++) {
      items += `<div class="main__grid__item">
                    <img src="https://s.pstatic.net/static/newsstand/2020/logo/light/0604/422.png">
                </div>`;
    }

    return `
        <div class="main__grid">
            ${items}
        </div>
    `;
  }
}

