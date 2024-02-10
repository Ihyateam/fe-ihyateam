<script>
	import { page } from '$app/stores';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';

	export let data;
</script>

<PageLayout>
	<div slot="header">
		<h2>{data.task?.id}</h2>
	</div>

	<div slot="body" class="container">
		<form>
			<label><input type="text" inputmode="numeric" name="hours" value={data.task?.id} /></label>
		</form>
	</div>
</PageLayout>

<style>
	.container {
		position: relative;
		container-name: balance;
		container-type: inline-size;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
		padding: 2rem;
		min-height: 300px;
		border-radius: 4px;
		overflow: auto;
		display: flex;
	}
</style>
