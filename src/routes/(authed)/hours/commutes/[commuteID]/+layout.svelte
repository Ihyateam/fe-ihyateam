<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import CommuteHeader from '$lib/components/task/commute-header.svelte';

	export let data;
</script>

<PageLayout>
	<CommuteHeader slot="header" commute={data.commute} />

	<slot slot="body" />
</PageLayout>
