<script lang="ts">
	import { onMount } from 'svelte';

	const characters = ['🎄', '🎅', '☃️'];

	let confettis = new Array(25)
		.fill('')
		.map((_, index) => {
			return {
				character: characters[index % characters.length],
				x: Math.random() * 100,
				y: -10 - Math.random() * 100,
				r: Math.random()
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame: number;

		function loop() {
			frame = requestAnimationFrame(loop);

			confettis = confettis.map((emoji) => {
				emoji.y += 0.2 * emoji.r;
				if (emoji.y > 120) emoji.y = -1;
				return emoji;
			});
		}

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
	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
        z-index: 1;
	}
</style>
