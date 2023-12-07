<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import WageList from '$lib/components/wage/wage-list.svelte';

	export let data;
</script>

<PageLayout>
	<svelte:fragment slot="header">
		<h2>wages</h2>
	</svelte:fragment>
	<WageList slot="body" wages={data.wages} />
</PageLayout>

<style>
	h2 {
		text-align: center;
	}
</style>
