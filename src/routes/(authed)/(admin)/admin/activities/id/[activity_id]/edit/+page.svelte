<script>
	export let data;
</script>

<div>
	<h1>Hello you are up to update this activity</h1>

	<div dir="ltr">
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
