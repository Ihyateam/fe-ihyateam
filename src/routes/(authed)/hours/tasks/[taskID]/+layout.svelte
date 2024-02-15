<script>
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import TaskHeader from '$lib/components/task/task-header.svelte';

	export let data;
</script>

<PageLayout>
	<TaskHeader slot="header" task={data.task} />

	<slot slot="body" />
</PageLayout>
