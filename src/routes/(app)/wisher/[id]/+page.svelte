<script lang="ts">
	import { page } from '$app/stores';
	import { Wishes } from '$lib/components';
	import { wishes } from '$lib/store';
	import type { Wisher } from '$lib/types';

	let wisher: Wisher;

	$: $wishes = $page.data.wishes;
	$: wisher = $page.data.wishers.find((x) => x.id == $page.params.id);
</script>

<h1 class="font-semibold text-3xl">{wisher.name}</h1>
{#if $wishes.length > 0}
	<Wishes />
{:else}
	<div class="flex flex-col justify-center mt-10 items-center">
		<h1 class="text-3xl">Oh, no! No <span class="text-primary">wishes</span> yet!</h1>
		<img class="h-52 my-10" src="/empty.svg" alt="Empty" />
	</div>
{/if}
