<script>
	import ActivityList from '$lib/components/activity/activity-list.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import TaskList from '$lib/components/task/task-list.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';

	export let data;
</script>

{#if data.user}
	<PageLayout>
		<UserProfileHeader user={data.user} slot="header" />
		<div slot="body">
			<UserProfileCard user={data.user} />
			<ActivityList activities={data?.activities} />
			<TaskList />
		</div>
	</PageLayout>
{:else}
	<h2>wrong page</h2>
{/if}

<style>
	div[slot='body'] {
		display: grid;
		height: 300px;
		width: 100%;
		gap: 0.5rem;
		grid-template-columns: 7fr 3fr;

		& > * {
			border-radius: 0.25rem;
			outline: var(--base-outline);
			background-color: aliceblue;
		}
	}
</style>
