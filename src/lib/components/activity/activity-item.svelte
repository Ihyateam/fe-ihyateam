<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let activity: ActivityEntity;
</script>

<div class="card">
	<div class="card__img">
		<img src={getURL(activity)} alt={activity.title} />
	</div>
	<h3>{activity.title}</h3>
</div>

<style>
	.card {
		width: 100%;
		height: 3rem;
		display: grid;
		grid-template-columns: 3rem 1fr;
		background-color: var(--base-background-color);
		gap: 0.5rem;
		justify-content: space-evenly;
		align-items: center;

		padding-top: 0.128rem;
		padding-bottom: 0.128rem;

		& > .card__img {
			width: 90%;
			height: 90%;
			margin: 0.5rem;
			border-radius: 0.128rem;
			overflow: hidden;
			outline: var(--base-outline);

			& > img {
				width: 100%;
				height: 100%;
			}
		}

		& > .card__body {
			display: flex;
			justify-content: space-evenly;
		}

		&:hover {
			background-color: var(--button-secondary-hover-background-color);
			cursor: pointer;
		}
	}
</style>
