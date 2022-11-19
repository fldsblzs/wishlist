export interface Wish {
	id: number;
	category: string;
	title: string;
	url: string;
	price: string;
	reserver: string;
}

export interface Wisher {
	id: number;
	name: string;
	email: string;
	wishes: Wish[];
}
