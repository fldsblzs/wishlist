<script lang="ts">
	import '../app.css';
	import { supabaseClient } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import SignIn from './SignIn.svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

{#if !$page.data.session}
	<SignIn />
{:else}
	<div class="flex flex-col h-screen">
		<Navbar />
		<div class="container mx-auto mt-16">
			<slot />
		</div>
	</div>
{/if}
