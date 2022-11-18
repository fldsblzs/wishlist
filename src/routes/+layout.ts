import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { getWishers } from '$lib/repositories/wishersRepository';
import type { Wisher } from '$lib/types';

export const load: LayoutLoad = async (event) => {
	const { session, supabaseClient } = await getSupabase(event);

	let wishers: Wisher[] = [];

	if (session?.user.email) {
		const allWishers = await getWishers(supabaseClient);
		wishers = allWishers.filter((wisher) => wisher.email !== session?.user.email);
	}

	return { session, wishers };
};
