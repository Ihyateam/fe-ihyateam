<script>
	import Table from '$lib/components/layouts/table.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';
	import TaskList from '$lib/components/task/task-list.svelte';
	import ActivityStatus from '$lib/components/activity/activity-status.svelte';
	import { getURL } from '$lib/utils/backend-utils';
	import { dateFormater } from '$lib/utils';

	export let data;
	const config = {
		ar: {
			title: {
				role: data.current_user?.isAdmin ? 'المدير' : 'المتطوع'
			}
		}
	};
</script>

<svelte:head>
	<title>
		{config['ar'].title.role} - {data.current_user?.first_name}
		{data.current_user?.last_name}
	</title>
</svelte:head>

{#if data.current_user}
	<PageLayout>
		<UserProfileHeader user={data.current_user} slot="header" />
		<div slot="body">
			<UserProfileCard user={data.current_user} />
			<Table
				baseUrl="/activities/id"
				headerObj={{
					image: 'الصورة',
					start_date: 'تاريخ البدء',
					status: 'الحالة'
				}}
				arr={data.activities}
				let:row
			>
				<td><img src={getURL(row.photo)} alt={row.id} /></td>
				<td>{dateFormater(new Date(row.start_date))}</td>
				<td><ActivityStatus activity={row} /></td>
			</Table>
			<TaskList tasks={data?.tasks} />
		</div>
		<pre>{JSON.stringify(data?.url, null, 2)}</pre>
	</PageLayout>
{:else}
	<h2>wrong page</h2>
{/if}

<style>
	div[slot='body'] {
		display: grid;
		width: 100%;
		height: 100%;
		gap: 0.5rem;
		grid-template-columns: 7fr 3fr;
		grid-template-rows: 300px 1fr;

		& > div:last-child {
			grid-column: span 2;
		}
	}
</style>
