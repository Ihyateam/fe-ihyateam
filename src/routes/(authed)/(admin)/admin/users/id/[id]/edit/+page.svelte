<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.params.id}</h1>

	<h2>Edit user</h2>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>
