<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import ActivityItem from './activity-item.svelte';

	export let activities: ActivityEntity[] = [];
</script>

<ul>
	<li>header</li>
	{#each activities as activity}
		<li>
			<ActivityItem {activity} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	li {
		display: flex;
		justify-content: center;
		align-items: center;
		outline: 1px solid salmon;
		height: max-content;
	}
</style>
