import { Base } from "../Base";
import { MainHeader } from "./main/MainHeader";
import { SubHeader } from "./sub/SubHeader";

export class Header extends Base {
  mainHeader: MainHeader;
  subHeader: SubHeader;
  constructor() {
    super();
    this.mainHeader = new MainHeader();
    this.subHeader = new SubHeader();
    this.render(`<header class="header"></header>`);
    this.init();
  }

  init() {
    this.setChildren(this.mainHeader, this.subHeader);
  }
}

