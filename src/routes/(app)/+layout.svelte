<script lang="ts">
	import { Navbar } from '$lib/components';
</script>

<div class="flex flex-col h-screen overflow-visible">
	<Navbar />
	<div class="container mx-auto mt-16">
		<slot />
	</div>
</div>
