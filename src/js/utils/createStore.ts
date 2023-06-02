export const createStore = (initialState = {}, updateStateFunc) => {
	let state = initialState;
	const listeners = [];

	const getState = () => state;

	const subscribe = (listener) => {
		listeners.push(listener);
	};

	const notifyListeners = () => {
		listeners.forEach((listener) => listener());
	};

	const updateState = (action) => {
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
