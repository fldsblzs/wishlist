import type { Wish } from '$lib/types';
import type { SupabaseClient } from '@supabase/supabase-js';

const table: string = 'wish';

export const getWishes = async (id: string, supabaseClient: SupabaseClient): Promise<Wish[]> => {
	const { data, error } = await supabaseClient.from(table).select().eq('wisher_id', id);

	if (error) {
		throw Error('Cannot query wishes from Supabase!');
	}

	return data as Wish[];
};
