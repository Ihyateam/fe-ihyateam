<script>
	import { page } from '$app/stores';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
</script>

<PageLayout>
	<h3 slot="header">Wage item - {$page.params.id}</h3>
</PageLayout>

<style>
	h3 {
		text-align: center;
	}
</style>
