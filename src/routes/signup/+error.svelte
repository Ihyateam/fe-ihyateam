<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		setTimeout(() => goto('/'), 2000);
	});
</script>

<h2 style="color: red;">are you okay?!</h2>
