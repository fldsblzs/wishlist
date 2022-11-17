import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getWishers } from '$lib/repositories/wishersRepository';

export const load: LayoutLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);
	const wishers = await getWishers(supabaseClient);

	return { session, wishers };
};
