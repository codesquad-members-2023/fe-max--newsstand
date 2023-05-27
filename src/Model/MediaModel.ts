const initImagesState = async () => {
  const response = await fetch('/src/services/grid.json');
  const data = await response.json();

  const images = data.images.map((image: imageData) => image.src);

  const shuffledImages = shuffleArray(images);

  return shuffledImages;
};

let state: MediaState = {
  images: await initImagesState(),
  currentPage: 1,
  startPoint: 0,
  itemsPerGrid: 24,
  currentEnterGrid: null,
  currentOverlay: null,
  isInsideGrid: false,
};

function shuffleArray(target: []) {
  for (let i = target.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j], target[i]];
  }
  return target;
}

const listeners: Listener[] = [];

const getState = (): MediaState => {
  return state;
};

const setState = (newState: Intent) => {
  state = { ...state, ...newState };

  notifyListeners();
};

const subscribe = (listener: Listener) => {
  listeners.push(listener);
};

const notifyListeners = () => {
  for (const listener of listeners) {
    listener();
  }
};

initImagesState();

export default { getState, setState, subscribe };

interface imageData {
  src: string;
  alt: string;
}

interface MediaState {
  images: string[];
  currentPage: number;
  startPoint: number;
  itemsPerGrid: number;
  currentEnterGrid: HTMLElement | null;
  currentOverlay: HTMLElement | null;
  isInsideGrid: boolean;
  [key: string]: string | number | boolean | object | [] | string[] | HTMLElement | null;
}

type Listener = () => void;

type Intent = {
  [key: string]: string | number | boolean | object | [];
};
