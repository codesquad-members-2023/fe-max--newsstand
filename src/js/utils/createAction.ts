export function createAction(type: string, payload?: any) {
	if (payload !== undefined) {
		return {
			type,
			payload,
		};
	}
	return {
		type,
	};
}
