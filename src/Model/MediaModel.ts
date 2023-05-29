const initImagesState = async () => {
  const response = await fetch('/src/services/grid.json');
  const data = await response.json();

  const images = data.images.map((image: imageData) => image.src);

  const shuffledImages = shuffleArray(images);

  return shuffledImages;
};
function shuffleArray(target: []) {
  for (let i = target.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [target[i], target[j]] = [target[j], target[i]];
  }
  return target;
}

export interface MediaState {
  mediaViewMode: string;

  currentPage: number;
  images: string[];
  gridStartPoint: number;
  itemsPerGrid: number;

  currentEnterGrid: HTMLElement | null;
  currentOverlay: HTMLElement | null;
  isInsideGrid: boolean;

  [key: string]: string | number | boolean | object | [] | string[] | HTMLElement | null | undefined;
}

let state: MediaState = {
  mediaViewMode: 'grid',

  //grid 모드 상태
  currentPage: 1,
  images: await initImagesState(),
  gridStartPoint: 0,
  itemsPerGrid: 24,

  // 오버레이 관련 상태
  isInsideGrid: false,
  currentEnterGrid: null,
  currentOverlay: null,
};

const listeners: Record<keyof MediaState, Listener[]> = {};

const subscribe = (key: keyof MediaState, listener: Listener) => {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key].push(listener);
};

const getState = (): MediaState => {
  // return state;
  return { ...state };
};

const setState = (newState: Partial<MediaState>) => {
  for (let key in newState) {
    if (state[key] !== newState[key]) {
      state[key] = newState[key];
      if (listeners[key]) {
        listeners[key].forEach((listener) => listener(state[key]));
      }
    }
  }
};

// const setState = (newState: Intent) => {
//   state = { ...state, ...newState };

//   notifyListeners();
// };

// const notifyListeners = () => {
//   for (const listener of listeners) {
//     listener();
//   }
// };

initImagesState();

export default { getState, setState, subscribe };

interface imageData {
  src: string;
  alt: string;
}

// type Listener = (value: keyof MediaState | undefined) => void;
type Listener = (value: string | number | boolean | object | [] | string[] | HTMLElement | null | undefined) => void;

// type Intent = {
//   [key: string]: string | number | boolean | object | [];
// };
