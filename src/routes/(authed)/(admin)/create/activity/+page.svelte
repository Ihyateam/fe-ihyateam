<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import ActivityForm from './activity-form.svelte';

	export let data;
</script>

<PageLayout>
	<h2 slot="header">Create new an activity</h2>

	<svelte:fragment slot="body">
		<ActivityForm {...data} />
	</svelte:fragment>
</PageLayout>
