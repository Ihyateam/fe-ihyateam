<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import ActivityItem from './activity-item.svelte';

	export let activities: ActivityEntity[] = [];

	const config = {
		ar: {
			header: 'فعالياتي'
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
		overflow: hidden;

		/* lately added */
		background-color: aqua;
		outline: var(--base-outline);
		border-radius: 0.25rem;
		/* must be deleted */

		& > header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2rem;
			border-bottom: var(--base-outline);
		}

		& > ul {
			background-color: white;
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: auto;

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
