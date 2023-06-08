import { createElement } from '../../utils/dom';
import { createStore } from '../../utils/createStore';
import { Dispatcher } from '../../utils/dispatcher';
import { createAction } from '../../utils/createAction';
import { Action } from '../../types/types';

let initialState = {
	mode: 'GRID',
	allGridData: [],
	currentGridData: [],
	listData: [],
	currentPage: 0,
	totalPage: 0,
	subscribedPressList: [],
};

export const Media = {
	async init() {
		await ActionCreator.fetchData();
		mediaStore.subscribe(this.updateView.bind(this));
		this.updateView();
		console.log(mediaStore.getState());

		const viewModeBtn = document.querySelector('.btn__viewer');
		viewModeBtn.addEventListener('click', this.handleViewMode);
	},

	updateView() {
		const { currentGridData, mode } = mediaStore.getState();
		console.log(mediaStore.getState());

		if (mode === 'GRID') {
			ViewForm.renderGrid(currentGridData);
		} else if (mode === 'LIST') {
			ViewForm.renderList();
		}

		// console.log(mediaStore.getState());
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
};

const ActionCreator = {
	async fetchData() {
		try {
			const data = await fetchGridData();
			console.log(data);

			const action = createAction('FETCH_GRID_DATA', data);
			Dispatcher.dispatch(action);
		} catch (error) {
			console.error('Error occurred while fetching data: ', error);
		}
	},

	changeViewMode() {
		const action = createAction('CHANGE_VIEW_MODE');
		Dispatcher.dispatch(action);
	},
};

const updateStateFunc = (state, action) => {
	switch (action.type) {
		case 'FETCH_GRID_DATA':
			return {
				...state,
				allGridData: action.payload,
				currentGridData: action.payload.slice(0, 24),
			};
		// case 'FETCH_GRID_DATA':
		// 	return {
		// 		...state,
		// 		allGridData: action.payload,
		// 		currentGridData: action.payload.slice(0, ITEMS_PER_PAGE),
		// 	};
		case 'CHANGE_VIEW_MODE':
			let changedMode = state.mode === 'GRID' ? 'LIST' : 'GRID';
			return {
				...state,
				mode: changedMode,
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

	renderGrid(data) {
		this.view.innerHTML = '';
		const gridDiv = createElement('div', { class: 'view__grid' });
		for (let i = 0; i < 24; i++) {
			const gridItem = document.createElement('div');
			gridItem.className = 'grid-item';

			if (data[i]) {
				const image = document.createElement('img');
				image.src = data[i].src;
				image.alt = data[i].alt;

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
