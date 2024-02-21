<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import ActivityContainer from '$lib/components/activity/activity-container.svelte';
	import ActivityHeader from '$lib/components/activity/activity-header.svelte';

	import UserTable from '$lib/components/user/user-list.svelte';

	export let data;
	const { users } = data;
</script>

<svelte:head>
	<title>{data.activity?.title}</title>
</svelte:head>

<PageLayout>
	<ActivityHeader slot="header" activity={data.activity} />

	<svelte:fragment slot="body">
		<ActivityContainer activity={data.activity} />
		<UserTable {users} />

		<div dir="ltr">
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	</svelte:fragment>
</PageLayout>

<style>
	[dir='ltr'] {
		margin-block-start: 2rem;
		outline: 1px solid salmon;
	}
</style>
