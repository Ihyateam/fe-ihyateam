<script lang="ts">
	import ActivityStatus from './activity-status.svelte';

	import type { ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let activity: ActivityEntity;
</script>

<div class="activity__header">
	<img src={getURL(activity, { thumb: '100x100' })} alt={activity.title} />
	<div class="header__info">
		<h2>{activity.title}</h2>
		<span class="demphasize">{activity.id}</span>
	</div>
	<div class="header__status">
		<ActivityStatus {activity} />
	</div>
</div>

<style>
	div.activity__header {
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);

		display: grid;
		grid-template-columns: 5rem repeat(auto-fit, minmax(100px, 1fr)) 7rem;
		justify-items: center;
		align-items: center;
		height: 5rem;
		border-radius: 0.5rem;

		& > img {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 0.5rem;
		}

		& > .header__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding-inline-start: 0.5rem;
			width: 100%;
			height: 100%;
		}

		& > .header__status {
			grid-column: -2 / -1;
			width: 5rem;
		}
	}

	.demphasize {
		letter-spacing: 1px;
		color: var(--demphasized-font-color-2);
		&::before {
			content: 'test';
		}
	}
</style>
