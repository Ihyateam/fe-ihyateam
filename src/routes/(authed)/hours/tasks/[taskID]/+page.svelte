<script>
	import ACtivityEdit from '$lib/components/activity/activity-edit.svelte';

	export let data;
</script>

<div class="container">
	<div class="info">
		<div dir="ltr">
			<pre>{JSON.stringify(data.task, null, 2)}</pre>
		</div>
	</div>
	<div class="edit-icon">
		<ACtivityEdit legend={true} />
	</div>
</div>

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

	.info {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(auto-fit, minmax(0px, 1fr));
	}

	div.edit-icon {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline-start: auto;
		cursor: pointer;
		flex-grow: 200px;
		inset-block-end: 1rem;
		inset-inline-end: 1rem;
	}

	@container balance (width < 550px) {
		.info {
			grid-template-columns: 1fr;
		}
	}
</style>
