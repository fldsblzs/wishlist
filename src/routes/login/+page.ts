import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { session } = await getSupabase(event);

	if (session) {
		const data = await event.parent();		
		throw redirect(303, `/wisher/${data.wishers[0].id}`);
	}

	return {};
};
