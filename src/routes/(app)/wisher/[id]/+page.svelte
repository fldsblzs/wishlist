<script lang="ts">
	import { page } from '$app/stores';
	import { Wishes } from '$lib/components';
	import { wishes } from '$lib/store';

	$: $wishes = $page.data.wishes;
</script>

<Wishes />
