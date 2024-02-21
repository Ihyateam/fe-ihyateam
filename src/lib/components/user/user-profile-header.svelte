<script lang="ts">
	import UserStatus from '$lib/components/user/user-status.svelte';

	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';

	export let user: UserEntity;
</script>

<div class="profile__header">
	<img class="profile__img profile" src={getURL(user, { thumb: '100x100' })} alt={user.username} />
	<div class="header__info">
		<h2>{user.first_name} {user.last_name}</h2>
		<span class="demphasize">{user.username}</span>
	</div>
	<div class="header__status">
		<UserStatus {user} />
	</div>
</div>

<style>
	.profile__header::after {
		content: '';
		position: absolute;
		background-color: white;
		width: 105%;
		height: 1.5rem;
		top: -0.75rem;
		transform: translateZ(-1px);
	}

	div.profile__header {
		transform-style: preserve-3d;
		position: sticky;
		top: 0.5rem;
		z-index: 1;

		background-color: var(--secondary-background-color);

		display: grid;
		grid-template-columns: 5rem repeat(auto-fit, minmax(100px, 1fr)) 7rem;
		justify-items: center;
		align-items: center;
		height: 5rem;
		border-radius: 0.5rem;
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);

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
		direction: ltr;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--demphasized-font-color-2);
	}
</style>
