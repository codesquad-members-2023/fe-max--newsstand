import { Action } from '../types/types';

export const createStore = <S>(
	initialState: S,
	updateStateFunc: (state: S, action: Action) => S,
) => {
	let state = initialState;
	const listeners: (() => void)[] = [];

	const getState = (): S => state;

	const subscribe = (listener: () => void) => {
		listeners.push(listener);
	};

	const notifyListeners = () => {
		listeners.forEach((listener) => listener());
	};

	const updateState = (action: Action) => {
		const newState = updateStateFunc(state, action);
		if (newState !== state) {
			state = newState;
			notifyListeners();
		}
	};

	return {
		getState,
		subscribe,
		updateState,
	};
};
