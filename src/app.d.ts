// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Wish, Wisher } from '$lib/types';

// and what to do when importing types
declare namespace App {
	interface Supabase {
		Database: import('./DatabaseDefinitions').Database;
		SchemaName: 'public';
	}

	// interface Locals {}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
		wishers: Wisher[] | null;
		wishes: Wish[] | null;
	}
	// interface Error {}
	// interface Platform {}
}
