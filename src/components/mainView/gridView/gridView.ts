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

  async initRender() {
    await this.store.fetchPressLogos();
    this.appendPressBox();
  }

  private appendPressBox() {
    const logos = this.store.getPaginatedLogos();

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

  getElement() {
    return this.$gridView;
  }

  prevPageRender() {
    this.store.decreasePage();
    this.clearPressBox();
    this.appendPressBox();
  }

  nextPageRender() {
    this.store.increasePage();
    this.clearPressBox();
    this.appendPressBox();
  }

  private clearPressBox() {
    Array.from(this.$group.children).forEach((element) => element.remove());
  }
}

class GridStore {
  private logos: PressLogo[] = [];
  private currentPage: number = 1;
  private maxPage: number = 1;
  private ITEM_PER_PAGE: number = 24;

  setLogos(data: PressLogo[]) {
    this.logos = data;
  }

  private setMaxPage(logosLength: number) {
    this.maxPage = Math.ceil(logosLength / this.ITEM_PER_PAGE);
  }

  getPaginatedLogos() {
    return this.logos.slice(
      (this.currentPage - 1) * this.ITEM_PER_PAGE,
      this.currentPage * this.ITEM_PER_PAGE
    );
  }

  increasePage() {
    if (this.currentPage >= this.maxPage) {
      return;
    }

    this.currentPage += 1;
  }

  decreasePage() {
    if (this.currentPage <= 1) {
      return;
    }

    this.currentPage -= 1;
  }

  async fetchPressLogos() {
    const response = await fetch("http://localhost:8080/press-logos");
    const data = await response.json();

    this.setLogos(data);
    this.setMaxPage(data.length);
  }
}
