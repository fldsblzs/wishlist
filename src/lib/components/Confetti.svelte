<script lang="ts">
	import { onMount } from 'svelte';

	export let count: number;

	const characters = ['🎄', '🎅', '☃️', '❄️', '🎁'];

	let confettis = new Array(count)
		.fill('')
		.map((_, index) => {
			return {
				character: characters[index % characters.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame: number;

		const loop = () => {
			frame = requestAnimationFrame(loop);

			confettis = confettis.map((emoji) => {
				emoji.y += 0.15 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;

				return emoji;
			});
		};

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

{#each confettis as confetti}
	<span style="left: {confetti.x}%; top: {confetti.y}%; transform: scale({confetti.r})"
		>{confetti.character}</span
	>
{/each}

<style>
	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
		z-index: 1;
	}
</style>
