<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
</script>

<PageLayout>
	<header slot="header">
		<h1>create wage</h1>
	</header>

	<form slot="body" method="POST" action="?/create">
		<label><input name="working_hour_rate" placeholder="working hour rate" type="number" /></label>
		<label
			><input name="commuting_hour_rate" placeholder="commuting hour rate" type="number" /></label
		>
		<label><input name="currency" placeholder="select currency" /></label>
		<button type="submit">create</button>
	</form>
</PageLayout>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 8px;

		& > button {
			width: 30ch;
		}
	}
</style>
