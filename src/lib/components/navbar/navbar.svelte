<script lang="ts">
	import type { UserEntity } from '$lib/types';
	import Profile from '$lib/components/profile/profile.svelte';

	export let user: UserEntity;
</script>

<nav>
	<a class="brand-logo" href="/" target="_self">
		<img src="/ihya-logo.svg" alt="ihya logo" />
	</a>
	<Profile {user} />
</nav>

<style>
	nav {
		padding-inline-start: 0.5rem;
		padding-inline-end: 0.5rem;

		display: flex;
		align-items: center;
		width: 100vw;
		justify-content: space-between;
		background-color: var(--secondary-background-color);
		border-bottom: 0.5px solid var(--base-border-color);
	}

	.brand-logo > img {
		height: 100%;
	}

	.brand-logo {
		display: block;
		height: 90%;
		width: 9rem;
	}
</style>
