export function splitItems(data) {
	const middleIndex = Math.floor(data.length / 2);
	const leftItems = data.slice(0, middleIndex);
	const rightItems = data.slice(middleIndex);

	return {
		leftItems,
		rightItems,
	};
}
