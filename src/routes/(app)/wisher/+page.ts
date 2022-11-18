import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const data = await event.parent();
	throw redirect(303, `/wisher/${data.wishers[0].id}`);
};
