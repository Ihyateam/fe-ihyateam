<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => goto('/'), 3000);
	});
</script>

<div>
	<p>Status: {$page.error?.message}</p>
	<span>url isn't found, {$page.status}</span>
	<div>you're being redirected to the root path</div>
</div>
