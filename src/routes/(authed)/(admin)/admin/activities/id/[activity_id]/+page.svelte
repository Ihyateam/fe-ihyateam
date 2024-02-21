<script lang="ts">
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import ActivityHeader from '$lib/components/activity/activity-header.svelte';
	import ActivityContainer from '$lib/components/activity/activity-container.svelte';
	import UserTable from '$lib/components/user/user-list.svelte';
	import ActivityEdit from '$lib/components/activity/activity-edit.svelte';

	export let data;
</script>

<PageLayout>
	<ActivityHeader slot="header" activity={data.activity} />

	<div slot="body">
		<ActivityContainer activity={data.activity} />
		<UserTable users={data.users} />
	</div>
</PageLayout>

<style>
	[slot='body'] {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
