<script>
	export let data;
</script>

<div class="container">
	<form>
		<label><input type="text" inputmode="numeric" name="hours" value={data.commute?.id} /></label>
	</form>
</div>

<style>
	.container {
		position: relative;
		container-name: balance;
		container-type: inline-size;
		background-color: var(--secondary-background-color);
		outline: var(--base-outline);
		box-shadow: var(--base-box-shadow);
		padding: 2rem;
		min-height: 300px;
		border-radius: 4px;
		overflow: auto;
		display: flex;
	}
</style>
