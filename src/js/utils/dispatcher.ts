import { Action } from '../types/types';

interface Dispatcher {
	callbacks: ((action: Action) => void)[];
	register(callback: (action: Action) => void): void;
	dispatch(action: Action): void;
}

export const Dispatcher: Dispatcher = {
	callbacks: [],
	register(callback: (action: Action) => void) {
		this.callbacks.push(callback);
	},
	dispatch(action: Action) {
		this.callbacks.forEach((callback) => callback(action));
	},
};
