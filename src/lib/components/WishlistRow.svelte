<script lang="ts">
	import type { Wish } from '$lib/types';
	import { capitalizeFirstLetter } from '$lib/utils/stringUtils';
	import { page } from '$app/stores';
	import { updateWish } from '$lib/repositories/wishesRepository';
	import { supabaseClient } from '$lib/db';

	export let wish: Wish;
	let checked: boolean = wish.reserver !== null && wish.reserver !== '';

	$: showCheckbox =
		wish.reserver === null ||
		wish.reserver === '' ||
		wish.reserver === $page.data.session?.user.user_metadata.full_name;

	const handleCheck = async () => {
		const reserver: string = checked ? '' : $page.data.session.user.user_metadata.full_name;
		await updateWish(wish.id, reserver, supabaseClient);
		// checked = !checked;
	};
</script>

<tr>
	<th>
		<label>
			{#if showCheckbox}
				<input
					bind:checked
					on:click={handleCheck}
					type="checkbox"
					class="checkbox checkbox-primary"
				/>
			{:else}
				🎁
			{/if}
		</label>
	</th>
	<td>
		<a class="link" target="blank" href={wish.url}>{capitalizeFirstLetter(wish.title)}</a>
	</td>
	<td>{wish.price}</td>
	<td>
		{#if wish.reserver}
			{wish.reserver}
		{/if}
	</td>
</tr>
