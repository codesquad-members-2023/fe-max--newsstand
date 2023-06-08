import { createElement } from '../../utils/dom';

export function createSubscribeButton() {
	const btnBox = createElement('div', {
		class: 'btn-grid-box',
		style: 'display: none',
	});

	const btn = createElement('div', {
		class: 'btn-grid-unsubscribe',
	});

	const img = createElement('img', {
		src: './src/assets/icon_plus.svg',
		alt: '',
	});

	const span = createElement('span');
	span.textContent = '구독하기';

	btn.appendChild(img);
	btn.appendChild(span);
	btnBox.appendChild(btn);

	return btnBox;
}
