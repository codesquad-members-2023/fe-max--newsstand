import { $ } from "@utils/domUtils";

interface PressLogo {
  src: string;
  alt: string;
}

export const initGridView = async () => {
  const gridStore = createGridStore();
  gridStore.setLogos(await fetchPressLogos());

  const $gridViewGroup = $(".grid-view-group");
  const ITEM_PER_PAGE = 24;
  const logos = gridStore.getPaginatedLogos(ITEM_PER_PAGE);

  logos.forEach((logo) => {
    const pressBox = createPressBoxElement(logo);
    $gridViewGroup.append(pressBox);
  });
};

const fetchPressLogos = async (): Promise<PressLogo[]> => {
  const response = await fetch("http://localhost:8080/press-logos");

  return await response.json();
};

const createPressBoxElement = (logo: PressLogo) => {
  const box = document.createElement("div");
  box.className = "grid-view-group__box";

  const image = document.createElement("img");
  box.className = "grid-view-group__logo";
  image.src = logo.src;
  image.alt = logo.alt;

  box.appendChild(image);

  return box;
};

const createGridStore = () => {
  let logos: PressLogo[] = [];
  let currentPage = 1;

  return {
    setLogos(data: PressLogo[]) {
      logos = data;
    },

    getPaginatedLogos(itemPerPage: number) {
      return logos.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
    },

    increasePage() {
      currentPage += 1;

      if (currentPage > logos.length) {
        this.initPage();
      }
    },

    initPage() {
      currentPage = 1;
    },

    getPage() {
      return currentPage;
    },
  };
};
