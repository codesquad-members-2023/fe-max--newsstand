import { createElement } from '../../utils/dom';
import { splitItems } from '../../utils/helpers';
import { createStore } from '../../utils/createStore';
import { Dispatcher } from '../../utils/dispatcher';
import { createAction } from '../../utils/createAction';
import { Action, RollingType, RollingItem } from '../../types/types';
import { initialRollingState } from '../../store/store';

export const Rolling = {
	init() {
		ActionCreator.fetchData();

		rollingStore.subscribe(this.updateView.bind(this));

		setInterval(() => {
			ActionCreator.rollLeftRollor();
			ActionCreator.rollRightRollor();
		}, 5000);
	},

	updateView() {
		const { leftItems, rightIndex, rightItems, leftIndex } =
			rollingStore.getState();

		RollingForm.renderLeft('.rolling__left', leftItems[leftIndex]);
		RollingForm.renderRight('.rolling__right', rightItems[rightIndex]);
	},
};

const ActionCreator = {
	async fetchData() {
		try {
			const data = await fetchRollingData();
			const action = createAction('FETCH_ROLLING_DATA', data);
			Dispatcher.dispatch(action);
		} catch (error) {}
	},

	rollLeftRollor() {
		const action = createAction('ROLL_LEFT_BANNER');
		Dispatcher.dispatch(action);
	},

	rollRightRollor() {
		const action = createAction('ROLL_RIGHT_BANNER');
		Dispatcher.dispatch(action);
	},
};

const updateStateFunc = (state: RollingType, action: Action): RollingType => {
	switch (action.type) {
		case 'FETCH_ROLLING_DATA':
			const { leftItems, rightItems } = splitItems(action.payload);
			return {
				...state,
				leftItems,
				rightItems,
			};
		case 'ROLL_LEFT_BANNER':
			return {
				...state,
				leftIndex: (state.leftIndex + 1) % state.leftItems.length,
			};
		case 'ROLL_RIGHT_BANNER':
			return {
				...state,
				rightIndex: (state.rightIndex + 1) % state.rightItems.length,
			};
		default:
			return state;
	}
};

const rollingStore = createStore<RollingType>(
	initialRollingState,
	updateStateFunc,
);
Dispatcher.register((action: Action) => rollingStore.updateState(action));

const RollingForm = {
	renderItem(container: HTMLElement, activeItem: RollingItem) {
		const { press, title, link } = activeItem;

		const pressDiv = createElement('div', { class: 'press' });
		pressDiv.textContent = press;

		const anchor = createElement('a', { class: 'title', href: link });
		anchor.textContent = title;

		container.innerHTML = '';

		container.appendChild(pressDiv);
		container.appendChild(anchor);
	},

	renderLeft(selector: string, activeItem: RollingItem) {
		const container = document.querySelector(selector) as HTMLElement;
		this.renderItem(container, activeItem);
	},

	renderRight(selector: string, activeItem: RollingItem) {
		const container = document.querySelector(selector) as HTMLElement;
		this.renderItem(container, activeItem);
	},
};

const fetchRollingData = async (): Promise<{ autoRolling: RollingItem[] }> => {
	const response = await fetch('http://localhost:3001/autoRolling');
	const data = await response.json();
	return data;
};
