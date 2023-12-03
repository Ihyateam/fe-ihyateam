<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import ActivityItem from './activity-item.svelte';

	export let activities: ActivityEntity[] = [];

	const config = {
		ar: {
			header: 'الفعاليات'
		}
	};
</script>

<div>
	<header>{config['ar'].header}</header>
	<ul>
		{#each activities as activity}
			<li>
				<ActivityItem {activity} />
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		height: 300px;
		display: flex;
		flex-direction: column;

		& > header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2rem;
		}

		& > ul {
			background-color: white;
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: scroll;

			& > li {
				display: flex;
				justify-content: center;
				align-items: center;
				outline: 1px solid salmon;
				height: max-content;
			}
		}
	}
</style>
