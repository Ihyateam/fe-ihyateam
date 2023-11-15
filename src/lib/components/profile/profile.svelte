<script lang="ts">
	import type { UserEntity } from '$lib/types';

	export let user: UserEntity;
</script>

<a class="avater" href="/user/{user.id}" target="_self">
	<img class="avater__img" src={user.photo} alt={user?.username || 'user-profile-img'} />
</a>

<style>
	.avater {
		display: block;
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
		border-radius: 50%;
	}

	.avater:hover {
		transition: box-shadow 0.2s ease-in-out;
		box-shadow: 0 0 0 0.25rem hsl(35, 100%, 85%);
	}

	.avater__img {
		border-radius: 50%;
	}

	img {
		height: 100%;
		width: 100%;
		color: transparent;
	}

	/* 
	.avater:hover::before {
		display: block;
	}

	.avater::before {
		content: ' ';
		display: none;
		position: absolute;
		top: -2.5rem;
		right: 0rem;
		width: 3.5rem;
		height: 7.1rem;
		z-index: -1;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	} */
</style>
