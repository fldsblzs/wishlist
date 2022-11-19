<script lang="ts">
	import { getImageForCategory } from '$lib/utils/categoryMapper';

	export let category: string;
</script>

<figure>
	<img class="category" src={`/${getImageForCategory(category)}.jpg`} alt={category} />
</figure>

<style>
	.category {
		height: 225px;
		width: 400px;
	}
</style>