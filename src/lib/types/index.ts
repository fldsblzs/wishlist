export interface Wish extends WishBase {
	category: string;
	title: string;
	url: string;
	price: string;
}

export interface Wisher {
	id: number;
	name: string;
	email: string;
	wishes: Wish[];
}

export interface WishBase {
	id: number;
	reserver: string;
}
