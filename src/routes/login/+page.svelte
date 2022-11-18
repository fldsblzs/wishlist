<script lang="ts">
	import { supabaseClient } from '$lib/db';

	let loading: boolean = false;

	const signIn = async () => {
		loading = true;
		const x = await supabaseClient.auth.signInWithOAuth({
			provider: 'google',
			options: {
				scopes: 'profile'
			}
		});		
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
			{#if loading}
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
