import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getWishers } from '$lib/repositories/wishersRepository';

export const load: LayoutLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	let wishers = await getWishers(supabaseClient);

	// TODO: enable this
	// if (session?.user.email) {
	// 	wishers = wishers.filter((wisher) => wisher.email !== session?.user.email);
	// }

	return { session, wishers };
};
