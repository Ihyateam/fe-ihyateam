<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import { getURL } from '$lib/utils/backend-utils';
	import UserStatus from './user-status.svelte';

	export let user: UserEntity;
</script>

<a href="/users/id/{user.id}">
	<img class="profile" alt={user.username} src={getURL(user, { thumb: '100x100' })} />
	<span>{user.first_name} {user.last_name}</span>
	<span>{user.username}</span>
	<span>{Math.floor(Math.random() * 100)}</span>
	<span>{Math.floor(Math.random() * 100)}</span>
	<UserStatus isActive={user.isActive} />
</a>

<style>
	a {
		width: 100%;
		height: 100%;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 3rem repeat(4, 1fr) 3rem;
		align-items: center;
		justify-items: center;
		padding: 0 1rem 0 1rem;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			background-color: hsla(0, 10%, 75%, 0.1);
		}

		& > img {
			display: flex;
			justify-content: center;
			align-items: center;
			object-fit: cover;
			height: 3rem;
			width: 3rem;
			border-radius: 50%;
		}

		& > span {
			padding-inline-end: 0.5rem;
			justify-self: right;
		}
	}
</style>
