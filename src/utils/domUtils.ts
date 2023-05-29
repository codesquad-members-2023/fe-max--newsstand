export const createElement = (tagName: string, attributes?: Object) => {
  const element = document.createElement(tagName);
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (Array.isArray(value)) {
        element.setAttribute(key, value.join(' '));
      } else {
        element.setAttribute(key, value);
      }
    }
  }
  return element;
};
