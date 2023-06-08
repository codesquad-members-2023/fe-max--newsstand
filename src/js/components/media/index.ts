import { createElement } from '../../utils/dom';
import { createStore } from '../../utils/createStore';
import { Dispatcher } from '../../utils/dispatcher';
import { createAction } from '../../utils/createAction';
import { Action } from '../../types/types';
import { createSubscribeButton, createUnsubscribeButton } from './button.js';

let initialState = {
	mode: 'GRID',
	allGridData: [],
	listData: [],
	currentPage: 0,
	totalPage: 0,
	subscribedPressList: [],
	currentTab: 'all',
};

export const Media = {
	async init() {
		await ActionCreator.loadData();
		mediaStore.subscribe(this.updateView.bind(this));
		this.updateView();
		console.log(mediaStore.getState());
		const viewModeBtn = document.querySelector('.btn__viewer');
		viewModeBtn.addEventListener('click', this.handleViewMode);

		this.renderSubscribeButton();
		this.handleSubscribeButton();

		const allPressBtn = document.querySelector('.btn__tap button:first-child');
		const subscribedPressBtn = document.querySelector(
			'.btn__tap button:last-child',
		);

		allPressBtn.addEventListener('click', this.handleAllPress.bind(this));
		subscribedPressBtn.addEventListener(
			'click',
			this.handleSubscribedPress.bind(this),
		);
	},

	handleAllPress() {
		const { allGridData, currentPage } = mediaStore.getState();
		mediaStore.updateState(createAction('SET_CURRENT_TAB', 'all')); // set current tab
		ViewForm.renderGrid(allGridData, currentPage);
		this.renderSubscribeButton();
	},

	handleSubscribedPress() {
		const { allGridData, currentPage, subscribedPressList } =
			mediaStore.getState();

		mediaStore.updateState(createAction('SET_CURRENT_TAB', 'subscribed')); // set current tab

		const filteredData = allGridData.filter((item) =>
			subscribedPressList.includes(item.alt),
		);
		ViewForm.renderGrid(filteredData, currentPage);
		this.renderSubscribeButton();
	},

	updateView() {
		const { allGridData, mode, currentPage } = mediaStore.getState();
		console.log(mediaStore.getState());

		if (mode === 'GRID') {
			ViewForm.renderGrid(allGridData, currentPage);
		} else if (mode === 'LIST') {
			ViewForm.renderList();
		}

		this.renderSubscribeButton();
	},

	handleViewMode(e) {
		const clickedElement = e.target.closest('svg');
		if (!clickedElement) return;

		const isActiveGrid = clickedElement.classList.contains('grid');
		const isActiveList = clickedElement.classList.contains('list');

		const siblingElements = clickedElement.parentElement.children;
		const listBtn = siblingElements[0];
		const gridBtn = siblingElements[1];

		if (isActiveGrid) {
			if (!gridBtn.classList.contains('active')) {
				gridBtn.classList.add('active');
				listBtn.classList.remove('active');
				ActionCreator.changeViewMode();
			}
		} else if (isActiveList) {
			if (!listBtn.classList.contains('active')) {
				listBtn.classList.add('active');
				gridBtn.classList.remove('active');
				ActionCreator.changeViewMode();
			}
		}
	},

	renderSubscribeButton() {
		const gridItems = document.querySelectorAll('.grid-item');
		const { subscribedPressList } = mediaStore.getState();

		gridItems.forEach((item) => {
			const imgElement = item.querySelector('img');

			if (!imgElement) {
				return;
			}

			const altValue = imgElement.alt;

			const existingBtnBox = item.querySelector('.btn-grid-box');
			if (existingBtnBox) {
				item.removeChild(existingBtnBox);
			}

			let btnBox;
			if (subscribedPressList.includes(altValue)) {
				btnBox = createUnsubscribeButton();
			} else {
				btnBox = createSubscribeButton();
			}

			item.appendChild(btnBox);

			item.addEventListener('mouseover', () => {
				btnBox.style.display = 'block';
			});

			item.addEventListener('mouseout', () => {
				btnBox.style.display = 'none';
			});
		});
	},

	handleSubscribeButton() {
		const view = document.querySelector('.view');
		view.addEventListener('click', (e) => {
			const btnSubscribe = e.target.closest('.btn-grid-subscribe');
			const btnUnsubscribe = e.target.closest('.btn-grid-unsubscribe');

			if (!btnSubscribe && !btnUnsubscribe) return;

			const altValue = e.target.closest('.grid-item').querySelector('img').alt;

			const isSubscribe = !!btnSubscribe;
			const isUnSubscribe = !!btnUnsubscribe;

			if (isSubscribe) {
				ActionCreator.subscribePress(altValue);
			} else if (isUnSubscribe) {
				ActionCreator.unsubscribePress(altValue);

				const { currentTab } = mediaStore.getState(); // get current tab
				if (currentTab === 'all') {
					this.handleAllPress();
				} else if (currentTab === 'subscribed') {
					this.handleSubscribedPress();
				}
			}
		});
	},
};

const ActionCreator = {
	async loadData() {
		try {
			const data = await fetchGridData();
			console.log(data);

			const action = createAction('LOAD_GRID_DATA', data);
			Dispatcher.dispatch(action);
		} catch (error) {
			console.error('Error occurred while fetching data: ', error);
		}
	},
	changeViewMode() {
		const action = createAction('CHANGE_VIEW_MODE');
		Dispatcher.dispatch(action);
	},
	subscribePress(pressName) {
		const action = createAction('SUBSCRIBE_PRESS', pressName);
		Dispatcher.dispatch(action);
	},
	unsubscribePress(pressName) {
		const action = createAction('UNSUBSCRIBE_PRESS', pressName);
		Dispatcher.dispatch(action);
	},
};

const updateStateFunc = (state, action) => {
	switch (action.type) {
		case 'LOAD_GRID_DATA':
			let totalPage = Math.ceil(action.payload.length / 24);
			return {
				...state,
				allGridData: action.payload,
				currentGridData: action.payload.slice(0, 24),
				totalPage: totalPage,
			};

		case 'CHANGE_VIEW_MODE':
			let changedMode = state.mode === 'GRID' ? 'LIST' : 'GRID';
			return {
				...state,
				mode: changedMode,
			};
		case 'SUBSCRIBE_PRESS':
			return {
				...state,
				subscribedPressList: [...state.subscribedPressList, action.payload],
			};
		case 'UNSUBSCRIBE_PRESS':
			return {
				...state,
				subscribedPressList: state.subscribedPressList.filter(
					(pressName) => pressName !== action.payload,
				),
			};
		case 'SET_CURRENT_TAB':
			return {
				...state,
				currentTab: action.payload,
			};
		default:
			return state;
	}
};

const mediaStore = createStore(initialState, updateStateFunc);
Dispatcher.register((action: Action) => mediaStore.updateState(action));

const ViewForm = {
	// container,
	container: document.querySelector('.contents__bottom'),
	view: document.querySelector('.view'),

	renderGrid(data, page) {
		this.view.innerHTML = '';

		const startIndex = page * 24;
		const endIndex = startIndex + 24;
		const gridData = data.slice(startIndex, endIndex);

		const gridDiv = createElement('div', { class: 'view__grid' });
		for (let i = 0; i < 24; i++) {
			const gridItem = document.createElement('div');
			gridItem.className = 'grid-item';

			if (gridData[i]) {
				const image = document.createElement('img');
				image.src = gridData[i].src;
				image.alt = gridData[i].alt;

				gridItem.appendChild(image);
			}

			gridDiv.appendChild(gridItem);
			this.view.appendChild(gridDiv);
			this.container.appendChild(this.view);
		}
	},

	renderList() {
		this.view.innerHTML = '';
		const listDiv = createElement('div', { class: '' });
		listDiv.textContent = '리스트부분임~';
		this.view.appendChild(listDiv);
		this.container.appendChild(this.view);
	},
};

const fetchGridData = async () => {
	const response = await fetch('http://localhost:3001/grid');
	const data = await response.json();
	return data;
};
