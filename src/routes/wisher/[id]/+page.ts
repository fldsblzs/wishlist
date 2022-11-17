import { getWishes } from '$lib/repositories/wishesRepository';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (!session) {
		throw redirect(303, '/');
	}

    const wishes = await getWishes(event.params.id, supabaseClient);    
	
	return {wishes};
};
