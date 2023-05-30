interface PressLogo {
  src: string;
  alt: string;
}

export class GridView {
  private $gridView: HTMLElement = document.createElement("div");
  private $frame: HTMLElement = document.createElement("div");
  private $group: HTMLElement = document.createElement("div");
  private store: GridStore = new GridStore();

  constructor() {
    this.initElement();
    this.initRender();
  }

  private initElement() {
    this.$gridView.className = "grid-view";

    this.$frame.className = "grid-view-frame";
    this.$frame.innerHTML = `
      <i class="grid-view-frame__row-frame1"></i>
      <i class="grid-view-frame__row-frame2"></i>
      <i class="grid-view-frame__row-frame3"></i>
      <i class="grid-view-frame__col-frame1"></i>
      <i class="grid-view-frame__col-frame2"></i>
      <i class="grid-view-frame__col-frame3"></i>
      <i class="grid-view-frame__col-frame4"></i>
      <i class="grid-view-frame__col-frame5"></i>`;

    this.$gridView.append(this.$frame);

    this.$group.className = "grid-view-group";
  }

  getElement() {
    return this.$gridView;
  }

  async initRender() {
    await this.store.fetchPressLogos();
    const ITEM_PER_PAGE = 24;
    const logos = this.store.getPaginatedLogos(ITEM_PER_PAGE);

    logos.forEach((logo) => {
      const pressBox = this.createPressBoxElement(logo);

      this.$group.append(pressBox);
    });

    this.$gridView.append(this.$group);
  }

  private createPressBoxElement(logo: PressLogo) {
    const box = document.createElement("div");
    box.className = "grid-view-group__box";

    const image = document.createElement("img");
    box.className = "grid-view-group__logo";
    image.src = logo.src;
    image.alt = logo.alt;

    box.appendChild(image);

    return box;
  }
}

class GridStore {
  logos: PressLogo[] = [];
  currentPage: number = 1;

  setLogos(data: PressLogo[]) {
    this.logos = data;
  }

  getPaginatedLogos(itemPerPage: number) {
    return this.logos.slice((this.currentPage - 1) * itemPerPage, this.currentPage * itemPerPage);
  }

  increasePage() {
    this.currentPage += 1;
  }

  decreasePage() {
    this.currentPage -= 1;
  }

  initPage() {
    this.currentPage = 1;
  }

  getPage() {
    return this.currentPage;
  }

  async fetchPressLogos() {
    const response = await fetch("http://localhost:8080/press-logos");
    const data = await response.json();

    this.setLogos(data);
  }
}
