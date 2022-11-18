<script lang="ts">
	import { Confetti, Login } from '$lib/components';
</script>

<div class="absolute top-0 bottom-0 overflow-hidden">
	<div class="signin">
		<Login />
	</div>
	<Confetti count={25} />
</div>

<style>
	.signin {
		width: 100vw;
	}
</style>
