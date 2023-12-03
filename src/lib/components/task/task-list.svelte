<script>
	import TaskItem from './task-item.svelte';

	export let tasks = ['a', 'b', 'c'];
</script>

<ul>
	<li>my-tasks</li>

	{#each tasks as task}
		<li>
			<TaskItem {task} />
		</li>
	{/each}
</ul>

<style>
	ul {
		margin-top: 2rem;
		grid-column: span 2;
	}

	li:first-of-type {
		display: flex;
		justify-content: center;
		border: var(--base-outline);
		align-items: center;
		height: 3rem;
	}
</style>
