export function createElement(
	tagName: string,
	attributes: { [key: string]: string } = {},
): HTMLElement {
	const element = document.createElement(tagName);

	for (const attribute in attributes) {
		element.setAttribute(attribute, attributes[attribute]);
	}

	return element;
}
