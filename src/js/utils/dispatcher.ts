export const Dispatcher = {
	callbacks: [],
	register(callback) {
		this.callbacks.push(callback);
	},
	dispatch(action) {
		this.callbacks.forEach((callback) => callback(action));
	},
};
