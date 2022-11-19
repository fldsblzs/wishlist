<script lang="ts">
	import type { Wish } from '$lib/types';
	import { reserveWish, cancelReservation } from '$lib/repositories/wishesRepository';
	import { supabaseClient } from '$lib/db';
	import { page } from '$app/stores';
	import type { Tweened } from 'svelte/motion';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { wishes } from '$lib/store';
	import WishCardBadges from './WishCardBadges.svelte';
	import WishCardImage from './WishCardImage.svelte';
	import WishCardTitle from './WishCardTitle.svelte';

	export let wish: Wish;

	$: isFree = wish.reserver === null || wish.reserver === '';
	$: isReservedByUser = wish.reserver === $page.data.session?.user.user_metadata.full_name;

	const handleReserve = async () => {
		const success = await reserveWish(
			wish.id,
			$page.data.session.user.user_metadata.full_name,
			supabaseClient
		);
		if (success) {
			updateStore($page.data.session.user.user_metadata.full_name);
		}
	};

	const handleCancel = async () => {
		const success = await cancelReservation(
			wish.id,
			$page.data.session?.user.user_metadata.full_name,
			supabaseClient
		);

		if (success) {
			updateStore('');
		}
	};

	const updateStore = (reserver: string) => {
		const index = $wishes.findIndex((w) => w.id === wish.id);
		$wishes[index].reserver = reserver;
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
	<WishCardImage category={wish.category} />
	<div class="card-body justify-between">
		<WishCardTitle title={wish.title} url={wish.url} />
		<div class="card-actions justify-between">
			<WishCardBadges category={wish.category} price={wish.price} />
			{#if isFree}
				<button on:click={handleReserve} class="btn btn-primary w-28">Reserve</button>
			{:else if isReservedByUser}
				<button on:click={handleCancel} class="btn btn-primary w-28">Cancel</button>
			{:else}
				<div class="text-2xl">🎁</div>
			{/if}
		</div>
	</div>
</div>
