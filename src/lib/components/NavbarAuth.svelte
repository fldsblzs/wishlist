<script lang="ts">
	import { page } from '$app/stores';
	import { supabaseClient } from '$lib/db';

	const signOut = async () => {
		await supabaseClient.auth.signOut();
	};

	$: avatar = $page.data.session?.user.user_metadata.avatar_url;
</script>

{#if $page.data.session?.user}
	<div class="dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle avatar">
			<div class="w-10 rounded-full">
				<img alt="Google avatar" src={avatar} />
			</div>
		</label>
		<ul
			tabindex="0"
			class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
		>
			<li><a href="/about">About</a></li>
			<li><a href="https://github.com/fldsblzs/wishlist" target="blank">GitHub</a></li>
			<li><button on:click={signOut}>Logout</button></li>
		</ul>
	</div>
{/if}
