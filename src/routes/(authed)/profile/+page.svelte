<script>
	import Table from '$lib/components/layouts/table.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';
	import TaskList from '$lib/components/task/effort-list.svelte';
	import ActivityStatus from '$lib/components/activity/activity-status.svelte';
	import { getURL } from '$lib/utils/backend-utils';
	import { dateFormater } from '$lib/utils';

	export let data;
	const { user, activities } = data;

	const config = {
		ar: {
			title: {
				role: user?.isAdmin ? 'المدير' : 'المتطوع'
			}
		}
	};
</script>

<svelte:head>
	<title>
		{config['ar'].title.role} - {user.first_name}
		{user.last_name}
	</title>
</svelte:head>

<PageLayout>
	<UserProfileHeader {user} slot="header" />
	<div slot="body">
		<UserProfileCard {user} />
		<Table
			baseUrl="/activities/id"
			headerObj={{
				image: 'الصورة',
				start_at: 'تاريخ البدء',
				status: 'الحالة'
			}}
			arr={activities}
			let:row
		>
			<td><img src={getURL(row)} alt={row.id} /></td>
			<td>{dateFormater(new Date(row.start_at))}</td>
			<td><ActivityStatus activity={row} /></td>
		</Table>
		<TaskList tasks={data?.tasks} />
	</div>
</PageLayout>

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
