<script lang="ts">
	import type { UserEntity } from '$lib/types';

	export let user: UserEntity;
</script>

<div class="profile-dialog">
	<img
		class="dialog__img profile-img"
		src={user.photo}
		alt={user?.username || 'user-profile-img'}
	/>
	<div class="info">
		<span>{user.first_name} {user.last_name}</span>
		<span>tel: +905358889952</span>
		<span>mailto: abd@gmail.com</span>
		<span>{user.isActive ? 'active' : 'inactive'}</span>
	</div>
</div>

<style>
	.profile-dialog {
		display: grid;
	}

	img {
		height: 100%;
		width: 100%;
		color: transparent;
	}

	.dialog__img {
		border-radius: 0.8rem;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.profile-dialog {
		display: none;
		position: absolute;
		cursor: default;
		top: -100%;
		right: 120%;

		background-color: white;
		border: 1px solid #8888;
		border-radius: 0.6rem;
		padding: 1rem;

		gap: 1rem;
		grid-template-rows: 1fr;
		grid-template-columns: 5rem 12rem;
	}
</style>
