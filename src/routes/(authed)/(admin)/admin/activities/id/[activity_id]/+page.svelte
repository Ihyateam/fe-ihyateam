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
		<div class="edit-icon">
			<ActivityEdit legend={true} />
		</div>
		<div dir="ltr">
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	</div>
</PageLayout>

<style>
	.flex {
		display: flex;
		flex-direction: column;
	}

	[slot='body'] {
		margin-block-start: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	div.edit-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-inline-start: auto;
		cursor: pointer;
		flex-grow: 200px;
	}
</style>
