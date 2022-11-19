<script lang="ts">
	import { wishes } from '$lib/store';
	import WishCard from './WishCard.svelte';
</script>

<div
	class="grid my-10 mx-10 md:mx-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10"
>
	{#each $wishes as wish (wish.id)}
		<WishCard {wish} />
	{/each}
</div>
