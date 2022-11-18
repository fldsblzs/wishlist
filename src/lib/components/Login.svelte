<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let loading: boolean = false;

	const signIn = () => {
		loading = true;
		supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: {
				scopes: 'profile'
			}
		});
	};

	const toFirstList = async () => {
		await goto(`/wisher/${$page.data.wishers[0].id}`);
	};
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold"><span class="text-primary">wish</span>list</h1>
			<p class="py-6">
				A totally random and unnecessary🎄 xmas 🎅 wish 🌠 list 📃 for your loved ones to use. Made
				with <a href="https://kit.svelte.dev/" target="blank" class="link link-primary">SvelteKit</a
				>.
			</p>
			{#if $page.data.session}
				<button on:click={toFirstList} class="btn btn-primary w-52">To the lists!</button>
			{:else if loading}
				<button class="btn btn-primary loading w-52">Loading</button>
			{:else}
				<button on:click={signIn} class="btn btn-primary w-52">Sign in with Google</button>
			{/if}
			<p class="mt-10 text-xs font-thin">
				If you can't, you probably should not be here. Check out <a
					class="link link-primary"
					href="https://github.com/fldsblzs/wishlist"
					target="blank">GitHub</a
				> for more info.
			</p>
		</div>
	</div>
</div>

<style>
	div {
		z-index: 100;
	}
</style>
