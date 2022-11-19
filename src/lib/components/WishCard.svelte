<script lang="ts">
	import type { Wish } from '$lib/types';
	import { capitalizeFirstLetter } from '$lib/utils/stringUtils';
	import { updateWish } from '$lib/repositories/wishesRepository';
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';
	import { getImageForCategory } from '$lib/utils/categoryMapper';
	import type { Tweened } from 'svelte/motion';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { wishes } from '$lib/store';

	export let wish: Wish;

	$: isFree = wish.reserver === null || wish.reserver === '';
	$: isReservedByUser = wish.reserver === $page.data.session?.user.user_metadata.full_name;

	const handleReserve = async () => {
		await updateWish(wish.id, $page.data.session.user.user_metadata.full_name, supabaseClient);

		const index = $wishes.findIndex((obj) => obj.id === wish.id);
		$wishes[index].reserver = $page.data.session.user.user_metadata.full_name;
	};

	const handleCancel = async () => {
		await updateWish(wish.id, '', supabaseClient);

		const index = $wishes.findIndex((obj) => obj.id === wish.id);
		$wishes[index].reserver = '';
	};

	const size: Tweened<number> = tweened(1, {
		duration: 300,
		easing: cubicOut
	});
</script>

<div
	class="card card-compact h-full shadow-xl"
	class:bg-base-content={isReservedByUser}
	class:bg-base-300={!isReservedByUser}
	on:mouseenter={() => ($size = 1.02)}
	on:mouseleave={() => ($size = 1)}
	style="transform: scale({$size}); transform-origin: center;"
>
	<figure>
		<img class="category" src={`/${getImageForCategory(wish.category)}.jpg`} alt={wish.category} />
	</figure>
	<div class="card-body justify-between">
		<h2 class="card-title">
			<a class="link link-primary" target="blank" href={wish.url}
				>{capitalizeFirstLetter(wish.title)}</a
			>
		</h2>
		<div class="card-actions justify-between">
			<div class="flex gap-2">
				<div class="badge badge-accent">
					{wish.category}
				</div>
				<div class="badge badge-accent">
					{wish.price}
				</div>
			</div>
			{#if isFree}
				<button on:click={handleReserve} class="btn btn-primary w-28">Reserve</button>
			{:else if isReservedByUser}
				<button on:click={handleCancel} class="btn btn-primary w-28">Cancel</button>
			{:else}
				<div>🎁</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.category {
		height: 225px;
		width: 400px;
	}
</style>
