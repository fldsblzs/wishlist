export interface Wish {
	title: string;
    url: string;
    price: string;
    reserver: string;
}

export interface Wisher {
    id: number;
	name: string;
	wishes: Wish[];
}
