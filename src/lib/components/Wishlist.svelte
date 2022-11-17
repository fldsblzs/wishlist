<script lang="ts">
	import WishlistHeader from './WishlistHeader.svelte';
	import WishlistRow from './WishlistRow.svelte';
	import { page } from '$app/stores';
</script>

<div class="overflow-x-auto w-full">
	<table class="table w-full">
		<WishlistHeader />
		<tbody>
			{#each $page.data.wishes as wish}
				<WishlistRow {wish} />
			{/each}
		</tbody>
	</table>
</div>
