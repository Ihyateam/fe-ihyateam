<script lang="ts">
	import type { UserEntity } from '$lib/types';

	export let user: UserEntity;
</script>

<button class="avater">
	<img src={user.photo} alt={user?.username || 'user-profile-img'} />
	<div class="profile-dialog">
		<p>{user.last_name}, {user.first_name}</p>
		<form method="POST" action="/logout">
			<button>logout</button>
		</form>
	</div>
</button>

<style>
	.avater:hover > .profile-dialog {
		display: block;
	}

	.profile-dialog {
		position: absolute;
		display: none;
		width: 10rem;
		height: 8rem;
		top: 3rem;
		right: 1px;
		padding: 10px;
		border: 1px solid #8888;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.avater {
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
		/* overflow: hidden; */
		border-radius: 50%;
	}

	.avater:hover {
		box-shadow: 0 0 0 0.25rem hsl(35, 100%, 85%);
	}

	img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}
</style>
