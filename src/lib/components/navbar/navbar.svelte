<script lang="ts">
	export let profile: { user: { [key: string]: any }; url: string };
</script>

<nav>
	<img class="brand-logo" src="/ihya-logo.svg" alt="ihya logo" />
	<img class="profile" src={profile.url} alt={profile.user?.username || 'user-profile-img'} />
</nav>

<style>
	nav {
		padding-inline-start: 0.5rem;
		padding-inline-end: 1rem;

		display: flex;
		align-items: center;
		width: 100vw;
		justify-content: space-between;
		border-bottom: 0.5px solid #8888;
	}

	.brand-logo {
		display: block;
		height: 90%;
	}

	.profile {
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
		border-radius: 50%;
		transition: box-shadow 0.2s ease-in-out;
	}

	.profile:hover {
		box-shadow: 0 0 0 0.25rem hsla(0, 0%, 80%, 0.8);
	}
</style>
