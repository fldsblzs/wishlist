import type { Wish } from '$lib/types';
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

export const updateWish = async (
	id: number,
	reserver: string | null,
	supabaseClient: SupabaseClient
) => {
	const { data, error } = await supabaseClient
		.from(table)
		.update({ reserver: reserver })
		.eq('id', id);
};
