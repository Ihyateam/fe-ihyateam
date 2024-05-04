<script>
	import ActivityEdit from '$lib/components/activity/activity-edit.svelte';
	import TaskContainer from '$lib/components/task/task-container.svelte';

	export let data;
</script>

<div class="container">
	<TaskContainer item={data.task} />
	{#if !data.task.is_paid}
		<div class="edit-icon">
			<ActivityEdit legend={true} />
		</div>
	{/if}
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
