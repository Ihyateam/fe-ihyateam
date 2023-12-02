<script lang="ts">
	import type { ActivityEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let activity: ActivityEntity;
</script>

<div class="card">
	<div class="card__img">
		<img src={getURL(activity)} alt={activity.title} />
	</div>
	<div class="card__body">
		<h3>{activity.title}</h3>
	</div>
</div>

<style>
	.card {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		& > .card__img {
			display: flex;
			

		}

		& > .card__body {
			display: flex;
			justify-content: space-evenly;
		}
	}
</style>
