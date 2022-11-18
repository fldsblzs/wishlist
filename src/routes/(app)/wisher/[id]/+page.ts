import { getWishes } from '$lib/repositories/wishesRepository';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { supabaseClient } = await getSupabase(event);

	const wishes = await getWishes(event.params.id, supabaseClient);

	return { wishes };
};
