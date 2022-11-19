<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/utils/stringUtils';

	export let title: string;
	export let url: string;
</script>

<h2 class="card-title">
	<a class="link link-primary" target="blank" href={url}>{capitalizeFirstLetter(title)}</a>
</h2>
