import type { Wish, WishBase } from '$lib/types';
import type { SupabaseClient } from '@supabase/supabase-js';

const table: string = 'wish';

export const getWishes = async (id: string, supabaseClient: SupabaseClient): Promise<Wish[]> => {
	const { data, error } = await supabaseClient
		.from(table)
		.select()
		.eq('wisher_id', id)
		.order('title', { ascending: true });
	if (error) {
		throw Error('Cannot query wishes from Supabase!');
	}

	return data as Wish[];
};

export const reserveWish = async (
	id: number,
	reserver: string,
	supabaseClient: SupabaseClient
): Promise<boolean> => {
	const { data, error } = await supabaseClient.from(table).select('id, reserver').eq('id', id);

	if (error) return false;

	const wish = data[0] as WishBase;

	if (!wish.reserver || wish.reserver === '') {
		await supabaseClient.from(table).update({ reserver: reserver }).eq('id', id);

		return true;
	}

	return false;
};

export const cancelReservation = async (
	id: number,
	reserver: string,
	supabaseClient: SupabaseClient
): Promise<boolean> => {
	const { data, error } = await supabaseClient.from(table).select('id, reserver').eq('id', id);

	if (error) return false;

	const wish = data[0] as WishBase;

	if (wish.reserver === reserver) {
		await supabaseClient.from(table).update({ reserver: '' }).eq('id', id);

		return true;
	}
	return false;
};
