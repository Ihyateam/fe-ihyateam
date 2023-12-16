<script>
	import { page } from '$app/stores';
</script>

<div>
	<error>{$page.error?.message}</error>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
