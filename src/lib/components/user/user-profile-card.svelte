<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let user: UserEntity;
</script>

<div class="card">
	<div class="card__img">
		<img class="profile" src={getURL(user)} alt={user.username} />
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 2fr 4fr;
		overflow: hidden;
	}

	.card__img {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}
</style>
