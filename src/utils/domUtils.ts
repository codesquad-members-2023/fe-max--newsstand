export const $ = (selector: string, context: Element | Document = document) => {
  const $element = context.querySelector(selector);

  if (!$element) {
    throw new Error(`no element found with ${selector}`);
  }

  return $element;
};

export const $$ = (selector: string, context: Element | Document = document) => {
  const $elements = context.querySelectorAll(selector);

  if (!$elements.length) {
    throw new Error(`no element found with ${selector}`);
  }

  return $elements;
};
