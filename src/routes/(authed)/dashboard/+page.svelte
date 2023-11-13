<script>
	import { enhance } from '$app/forms';
</script>

<main>
	<div>homepage</div>
	<form method="post" action="/logout" use:enhance>
		<button type="submit">logout</button>
	</form>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
</style>
