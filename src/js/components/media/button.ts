import { createElement } from '../../utils/dom';

const createButton = (className, buttonText) => {
	const btnBox = createElement('div', {
		class: 'btn-grid-box',
		style: 'display: none',
	});

	const btn = createElement('div', {
		class: className,
	});

	const img = createElement('img', {
		src: './src/assets/icon_plus.svg',
		alt: '',
	});

	const span = createElement('span');
	span.textContent = buttonText;

	btn.appendChild(img);
	btn.appendChild(span);
	btnBox.appendChild(btn);

	return btnBox;
};

export const createSubscribeButton = () => {
	return createButton('btn-grid-subscribe', '구독하기');
};

export const createUnsubscribeButton = () => {
	return createButton('btn-grid-unsubscribe', '해지하기');
};
