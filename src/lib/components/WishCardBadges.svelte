<script lang="ts">
	export let category: string;
	export let price: string;
</script>

<div class="flex gap-2">
	<div class="badge badge-accent">
		{category}
	</div>
	<div class="badge badge-accent">
		{price}
	</div>
</div>
