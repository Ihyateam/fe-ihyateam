<script lang="ts">
	export let profile: { user: { [key: string]: any }; url: string };
</script>

<nav>
	<a class="brand-logo" href="/" target="_self">
		<img src="/ihya-logo.svg" alt="ihya logo" />
	</a>
	<img class="profile" src={profile.url} alt={profile.user?.username || 'user-profile-img'} />
	<form method="POST" action="/logout">
		<button>logout</button>
	</form>
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

	.brand-logo > img {
		height: 100%;
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
