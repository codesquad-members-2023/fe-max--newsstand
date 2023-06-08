export type Action = {
	type: string;
	payload?: any;
};

export interface RollingItem {
	press: string;
	title: string;
	link: string;
}

export interface RollingType {
	leftIndex: number;
	rightIndex: number;
	leftItems: RollingItem[];
	rightItems: RollingItem[];
}
