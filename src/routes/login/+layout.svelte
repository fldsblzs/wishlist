<script lang="ts">
	import { Confetti } from '$lib/components';
	import { page } from '$app/stores';
</script>

<div class="absolute top-0 bottom-0 overflow-hidden">
	<div class="signin">
		{#if !$page.data.session}
			<slot />
		{/if}
	</div>
	<Confetti count={25} />
</div>

<style>
	.signin {
		width: 100vw;
	}
</style>
