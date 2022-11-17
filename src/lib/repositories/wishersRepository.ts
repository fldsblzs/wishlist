import type { Wisher } from "$lib/types";
import type { SupabaseClient } from "@supabase/supabase-js";

const table: string = 'wisher';

export const getWishers = async (supabaseClient: SupabaseClient): Promise<Wisher[]> => {
	const { data, error } = await supabaseClient
		.from(table)
		.select()
		.order('name', { ascending: true });	

	if (error){
		throw Error("Cannot query wishers from Supabase!");
	}

	return (data as Wisher[]);
};
