<script>
	import { page } from '$app/stores';
	import ActivityContainer from '$lib/components/activity/activity-container.svelte';
	import Table from '$lib/components/layouts/table.svelte';
	import PageLayout from '$lib/components/layouts/page-layout.svelte';
	import UserProfileCard from '$lib/components/user/user-profile-card.svelte';
	import UserProfileHeader from '$lib/components/user/user-profile-header.svelte';

	export let data;
	let config = {
		ar: {
			user: 'المستفيد',
			comment: 'التعليق',
			createdAt: 'تاريخ المهمة',
			isPaid: 'تم الدفع'
		}
	};
</script>

{#if data.current_user}
	<PageLayout>
		<UserProfileHeader user={data.current_user} slot="header" />
		<div slot="body">
			<UserProfileCard user={data.current_user} />
			<ActivityContainer activities={data?.activities} />
			<Table
				baseUrl={`/users/id/${$page.params.id}/tasks`}
				headerObj={config['ar']}
				arr={data.tasks ?? []}
				let:row
			>
				<td>
					{$page.params.id}
				</td>
				<td>
					{row.comment}
				</td>
				<td>
					{row.at_date}
				</td>
				<td>
					{Math.random() > 0.5 ? 'نعم' : 'لا'}
				</td>
			</Table>
		</div>
		<pre>{JSON.stringify(data?.url, null, 2)}</pre>
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

		& > div:last-child {
			grid-column: span 2;
		}
	}
</style>
