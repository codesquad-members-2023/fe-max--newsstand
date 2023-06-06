import { Base } from "../Base";

export class List extends Base {
  constructor() {
    super();
    this.render(`
        <div class="main__list">List</div>
    `);
  }
}
