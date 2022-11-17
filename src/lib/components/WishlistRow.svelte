<script lang="ts">
	import type { Wish } from '$lib/types';
	import { capitalizeFirstLetter } from '$lib/utils/stringUtils';

	export let wish: Wish;
</script>

<tr>
	<th>
		<label>
			<input type="checkbox" class="checkbox checkbox-primary" />
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
