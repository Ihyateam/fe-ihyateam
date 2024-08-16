<script lang="ts">
	import ActivityStatus from './activity-status.svelte';

	import type { AcceptLang, ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let activity: ActivityEntity;
	export let lang: AcceptLang;
</script>

<div class="activity__header">
	<img class="card__profile" src={getURL(activity)} alt="new activity thumbnail" />

	<div class="header__status">
		<ActivityStatus {lang} />
	</div>
</div>

<style>
	.activity__header::after {
		content: '';
		position: absolute;
		background-color: white;
		width: 115%;
		height: 1.5rem;
		top: -0.75rem;

		transform: translateX(4rem) translateZ(-1px);
	}

	div.activity__header {
		transform-style: preserve-3d;
		position: sticky;
		top: 0.5rem;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);

		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 5rem;
		border-radius: 0.5rem;
		padding-inline: 1rem;
		z-index: 1;

		& > img {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 0.5rem;
		}
	}

	.header__status {
		grid-column: -2 / -1;
		width: 7rem;
	}

	.header__info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-inline-start: 0.5rem;
		width: 100%;
		height: 100%;
	}

	.header__info > h2 {
		min-width: 0;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.demphasize {
		letter-spacing: 1px;
		color: var(--demphasized-font-color-2);
	}
</style>
