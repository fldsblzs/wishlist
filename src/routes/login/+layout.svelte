<script lang="ts">
	import { Confetti } from '$lib/components';
	import { page } from '$app/stores';
	import { getStore } from '$lib/store';

	const store = getStore();
</script>

<div class="absolute top-0 bottom-0 overflow-hidden">
	<div class="signin">
		<slot />
	</div>
	<Confetti count={25} />
</div>

<style>
	.signin {
		width: 100vw;
	}
</style>
