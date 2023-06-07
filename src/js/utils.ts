export const systemDate: string = new Date().toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'long',
});

export const setAttributes = (element: HTMLElement, attributes: { [key: string]: string } = {}): void => {
  for (const attributeKey in attributes) {
    element.setAttribute(attributeKey, attributes[attributeKey]);
  }
};

export const createElement = (elementName: string, options: { [key: string]: string } = {}): HTMLElement => {
  const element = document.createElement(elementName);
  setAttributes(element, options);
  return element;
};

export const shuffleArray = (array: { src: string; alt: string }[]): { src: string; alt: string }[] => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temporary = array[index];

    array[index] = array[randomPosition];
    array[randomPosition] = temporary;
  }
  return array;
};
