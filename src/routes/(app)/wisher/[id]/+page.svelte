<script lang="ts">
	import { page } from '$app/stores';
	import { Wishes } from '$lib/components';
	import { wishes } from '$lib/store';

	$: $wishes = $page.data.wishes;
</script>

{#if $wishes.length > 0}
	<Wishes />
{:else}
	<div class="flex flex-col justify-center mt-10 items-center">
		<h1 class="text-3xl">Oh, no! No <span class="text-primary">wishes</span> yet!</h1>
		<img class="h-52 my-10" src="/empty.svg" alt="Empty" />
	</div>
{/if}
