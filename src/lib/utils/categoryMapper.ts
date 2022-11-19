const CATEGORIES: Map<string, string> = new Map([
	['Könyv', 'book'],
	['Kávé', 'coffee'],
	['Konyhai eszköz', 'kitchen'],
	['Utalvány', 'voucher'],
	['Társasjáték', 'boardgame'],
	['Sporteszköz', 'sports']
]);

export const getImageForCategory = (category: string): string => {
	const image: string | undefined = CATEGORIES.get(category);

	return image === undefined ? 'common' : image;
};
